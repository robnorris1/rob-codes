'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { Download as DownloadIcon, Menu as MenuIcon } from '@mui/icons-material';

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const menuItems = ['About', 'Stories', 'Skills', 'Contact'];

    const [mobileAnchorEl, setMobileAnchorEl] = useState<null | HTMLElement>(null);
    const isMobileMenuOpen = Boolean(mobileAnchorEl);

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileAnchorEl(null);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            handleMobileMenuClose();
        }
    };

    return (
        <AppBar position="sticky" color="default" elevation={0}>
            <Toolbar sx={{ py: 1 }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        fontWeight: 600,
                        color: 'text.primary',
                        letterSpacing: '-0.01em',
                        '& .accent': {
                            color: 'secondary.main',
                            fontWeight: 600,
                        },
                    }}
                >
                    <span className="accent">{'{'}</span>
                    {' rob'}
                    <span className="accent">_</span>
                    {'codes '}
                    <span className="accent">{'}'}</span>
                </Typography>

                {!isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
                        {menuItems.map((item) => (
                            <Button
                                key={item}
                                color="inherit"
                                onClick={() => scrollToSection(item)}
                                sx={{
                                    px: 2,
                                    py: 1,
                                    color: 'text.secondary',
                                    fontWeight: 500,
                                    fontSize: '0.95rem',
                                    textTransform: 'none',
                                    borderRadius: 1,
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        color: 'text.primary',
                                        backgroundColor: 'grey.50',
                                    }
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                )}

                <Button
                    component="a"
                    href="/assets/rob_norris_resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="small"
                    startIcon={<DownloadIcon sx={{ fontSize: '1rem' }} />}
                    sx={{
                        px: 2.5,
                        py: 1,
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        textTransform: 'none',
                        minWidth: 'auto',
                        borderRadius: 1.5,
                    }}
                >
                    CV
                </Button>

                {isMobile && (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open menu"
                            edge="end"
                            onClick={handleMobileMenuOpen}
                            sx={{
                                ml: 1,
                                color: 'text.secondary',
                                '&:hover': {
                                    backgroundColor: 'grey.50',
                                }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            anchorEl={mobileAnchorEl}
                            open={isMobileMenuOpen}
                            onClose={handleMobileMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            PaperProps={{
                                sx: {
                                    mt: 1,
                                    borderRadius: 2,
                                    minWidth: 150,
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                }
                            }}
                        >
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    sx={{
                                        py: 1.5,
                                        px: 2,
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        color: 'text.secondary',
                                        '&:hover': {
                                            color: 'text.primary',
                                            backgroundColor: 'grey.50',
                                        }
                                    }}
                                >
                                    {item}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
