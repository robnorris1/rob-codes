'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { ContactForm } from '../Contact/ContactForm';
import { ContactMethod } from '../Contact/ContactMethod';
import { useContactData } from '../../hooks/useContactData';

const Contact: React.FC = () => {
    const { contactMethods } = useContactData();

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: 'text.primary',
                            fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                            fontWeight: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        Let's discuss your next project or opportunity
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                color: 'text.primary',
                            }}
                        >
                            Contact Methods
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {contactMethods.map((method) => (
                                <ContactMethod
                                    key={method.type}
                                    type={method.type}
                                    label={method.label}
                                    value={method.value}
                                    link={method.link}
                                />
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
