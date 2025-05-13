import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactRequest {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export async function POST(req: Request) {
    try {
        const body = await req.json() as ContactRequest;
        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: 'Invalid email format' },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
            console.error('Missing environment variables:', {
                hasResendApiKey: !!process.env.RESEND_API_KEY,
                hasFromEmail: !!process.env.FROM_EMAIL,
                hasToEmail: !!process.env.TO_EMAIL,
            });

            return NextResponse.json(
                { message: 'Server configuration error' },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const result = await resend.emails.send({
            from: `Portfolio Contact <${process.env.FROM_EMAIL}>`,
            to: [process.env.TO_EMAIL],
            subject: `Portfolio Contact: ${subject || 'New Message'}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
            replyTo: email
        });

        if (result.error) {
            console.error('Resend API error:', result.error);

            return NextResponse.json(
                { message: 'Failed to send email. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Unexpected error:', error);

        return NextResponse.json(
            { message: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
