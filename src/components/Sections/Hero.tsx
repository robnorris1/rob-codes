// src/components/Sections/Hero.tsx
'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { FC } from 'react';

const Hero: FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                pt: 12,
                pb: 8,
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center' }}>
                    {/* Logo/Name */}
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            fontFamily: 'monospace',
                            letterSpacing: '0.05em',
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 4,
                            '& .brace': {
                                color: 'primary.main',
                                fontWeight: 'bold',
                            },
                            '& .underscore': {
                                color: 'primary.main',
                            },
                        }}
                    >
                        <span className="brace">{'{'}</span>
                        {' rob'}
                        <span className="underscore">_</span>
                        {'codes '}
                        <span className="brace">{'}'}</span>
                    </Typography>

                    {/* Title */}
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.75rem', md: '2.25rem' },
                            fontWeight: 500,
                            mb: 3,
                            color: 'text.primary',
                        }}
                    >
                        Full Stack Software Engineer
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.8,
                            mb: 6,
                        }}
                    >
                        AWS Certified professional with expertise in React, TypeScript, and Next.js.
                        Passionate about delivering user-centric solutions and mentoring fellow developers.
                    </Typography>

                    {/* CTA Buttons */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 3,
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => scrollToSection('skills')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                minWidth: '160px',
                                textTransform: 'none',
                                boxShadow: 'none',
                                '&:hover': {
                                    boxShadow: 'none',
                                }
                            }}
                        >
                            View Skills
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => scrollToSection('contact')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                minWidth: '160px',
                                textTransform: 'none',
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                }
                            }}
                        >
                            Contact Me
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
