// src/components/Layout/Header.tsx
'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { FC } from 'react';

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
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
            </Toolbar>
        </AppBar>
    );
};

export default Header;
