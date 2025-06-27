import React, { useState } from 'react';
import {
    Box,
    Grid,
    TextField,
    Button,
    Paper,
    Typography,
    Snackbar,
    Alert,
} from '@mui/material';
import {SendIcon} from "lucide-react";


interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error',
    });

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSnackbar({
                open: true,
                message: 'Message sent successfully! I will get back to you soon.',
                severity: 'success',
            });

            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to send message. Please try again later.',
                severity: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <>
            <Paper
                sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}
                >
                    Send me a message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                required
                                disabled={isSubmitting}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                required
                                disabled={isSubmitting}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                multiline
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                required
                                disabled={isSubmitting}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                endIcon={<SendIcon />}
                                disabled={isSubmitting}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    textTransform: 'none',
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                    severity={snackbar.severity}
                    sx={{ width: '100%', borderRadius: 2 }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};
