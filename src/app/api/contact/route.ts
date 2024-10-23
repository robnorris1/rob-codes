// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        // Log environment variables (remove in production!)
        console.log('Checking env vars:', {
            hasApiKey: !!process.env.SENDGRID_API_KEY,
            fromEmail: process.env.FROM_EMAIL,
            toEmail: process.env.TO_EMAIL,
        });

        const body = await req.json();
        const { name, email, subject, message } = body;

        // Log the request body (remove in production!)
        console.log('Request body:', { name, email, subject });

        const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                personalizations: [{
                    to: [{ email: process.env.TO_EMAIL }],
                }],
                from: {
                    email: process.env.FROM_EMAIL,
                    name: 'Portfolio Contact Form',
                },
                subject: `Portfolio Contact: ${subject || 'New Message'}`,
                content: [{
                    type: 'text/html',
                    value: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
                }],
            }),
        });

        if (!sendGridResponse.ok) {
            const errorData = await sendGridResponse.text();
            console.error('SendGrid error:', errorData);
            throw new Error(`SendGrid API error: ${errorData}`);
        }

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Detailed error:', error);
        return NextResponse.json(
            { message: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` },
            { status: 500 }
        );
    }
}
