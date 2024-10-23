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
                pb: 6,
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h1"
                    align="center"
                    gutterBottom
                    sx={{
                        fontFamily: 'monospace',
                        letterSpacing: '0.05em',
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
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 4 }}
                >
                    A Full Stack Software Engineer passionate about creating elegant solutions
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => scrollToSection('skills')}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                        }}
                    >
                        View Skills
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => scrollToSection('contact')}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                        }}
                    >
                        Contact Me
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
