// src/components/Layout/Header.tsx
'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { FC } from 'react';
import { Download as DownloadIcon } from '@mui/icons-material';

const Header: FC = () => {
    const menuItems = ['About', 'Skills', 'Contact'];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position="sticky" color="default" elevation={0}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        letterSpacing: '0.05em',
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

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 1 }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item}
                            color="inherit"
                            onClick={() => scrollToSection(item)}
                            sx={{
                                mx: 1,
                                '&:hover': {
                                    color: 'primary.main',
                                }
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>

                <Button
                    component="a"
                    href="/assets/rob_norris_resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '8px',
                        backgroundColor: 'primary.main', // Your brown/beige tone
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        px: 2,
                        py: 0.75,
                        minWidth: 'auto',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            backgroundColor: '#C49366', // Slightly darker shade
                        }
                    }}
                >
                    <DownloadIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
                    CV
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
