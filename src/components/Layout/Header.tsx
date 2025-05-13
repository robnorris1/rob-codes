'use client';

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
import { FC, useState } from 'react';
import { Download as DownloadIcon, Menu as MenuIcon } from '@mui/icons-material';

const Header: FC = () => {
    // Menu items
    const menuItems = ['About', 'Skills', 'Contact'];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Mobile menu state
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
            <Toolbar>
                {/* Logo */}
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

                {/* Desktop Navigation */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
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
                )}

                {/* CV Download Button */}
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
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        px: 2,
                        py: 0.75,
                        minWidth: 'auto',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            backgroundColor: '#C49366',
                        }
                    }}
                >
                    <DownloadIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
                    CV
                </Button>

                {/* Mobile Menu Button */}
                {isMobile && (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open menu"
                            edge="end"
                            onClick={handleMobileMenuOpen}
                            sx={{ ml: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Mobile Menu */}
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
                        >
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    sx={{
                                        minWidth: 150,
                                        '&:hover': { color: 'primary.main' }
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
