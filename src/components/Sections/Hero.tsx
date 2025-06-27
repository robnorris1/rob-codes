'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero: React.FC = () => {
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
                pt: { xs: 8, md: 12 },
                pb: { xs: 8, md: 12 },
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
                            fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
                            fontWeight: 600,
                            mb: { xs: 3, md: 4 },
                            color: 'text.primary',
                            letterSpacing: '-0.02em',
                            '& .accent': {
                                color: 'secondary.main',
                            },
                        }}
                    >
                        <span className="accent">{'{'}</span>
                        {' rob'}
                        <span className="accent">_</span>
                        {'codes '}
                        <span className="accent">{'}'}</span>
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '1.875rem', md: '2.25rem' },
                            fontWeight: 600,
                            mb: { xs: 3, md: 4 },
                            color: 'text.primary',
                            lineHeight: 1.2,
                        }}
                    >
                        Full Stack Software Engineer
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            color: 'text.secondary',
                            maxWidth: '580px',
                            mx: 'auto',
                            lineHeight: 1.6,
                            mb: { xs: 6, md: 8 },
                        }}
                    >
                        7+ years building robust backend systems and full-stack applications.
                        Experienced with Node.js, RESTful APIs, and modernizing enterprise
                        systems serving thousands of users.
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            mb: { xs: 4, md: 6 },
                            maxWidth: { xs: '300px', sm: 'none' },
                            mx: 'auto',
                        }}
                    >
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => scrollToSection('about')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 500,
                                minWidth: '140px',
                                width: { xs: '100%', sm: 'auto' },
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                }
                            }}
                        >
                            About
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => scrollToSection('stories')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 500,
                                minWidth: '140px',
                                width: { xs: '100%', sm: 'auto' },
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                }
                            }}
                        >
                            My Stories
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => scrollToSection('skills')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 500,
                                minWidth: '140px',
                                width: { xs: '100%', sm: 'auto' },
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                }
                            }}
                        >
                            Skills
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => scrollToSection('contact')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 500,
                                minWidth: '140px',
                                width: { xs: '100%', sm: 'auto' },
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                }
                            }}
                        >
                            Contact
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
