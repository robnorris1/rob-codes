// src/styles/commonStyles.ts
import { SxProps, Theme } from '@mui/material/styles';

// Reusable style objects that use theme values
export const commonStyles = {
    // Section layouts
    section: {
        py: 8,
        bgcolor: 'background.default',
    } as SxProps<Theme>,

    sectionAlt: {
        py: 8,
        bgcolor: 'background.paper',
    } as SxProps<Theme>,

    // Container styles
    centerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    } as SxProps<Theme>,

    // Typography styles
    sectionTitle: {
        component: 'h2',
        variant: 'h3',
        align: 'center',
        color: 'text.primary',
        gutterBottom: true,
        mb: 6,
    } as const,

    // Card styles
    hoverCard: {
        p: 3,
        height: '100%',
        bgcolor: 'background.paper',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.100',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
        },
    } as SxProps<Theme>,

    // Icon with text styles
    iconHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        mb: 2,
        color: 'primary.main',
    } as SxProps<Theme>,

    // Button styles
    ctaButton: {
        px: 4,
        py: 1.5,
        fontSize: '1.1rem',
        minWidth: '160px',
        textTransform: 'none',
    } as SxProps<Theme>,

    // Brand logo styles
    brandLogo: {
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
        '& .brace': {
            color: 'primary.main',
            fontWeight: 'bold',
        },
        '& .underscore': {
            color: 'primary.main',
        },
    } as SxProps<Theme>,

    // Form styles
    formContainer: {
        '& .MuiTextField-root': {
            mb: 2,
        },
    } as SxProps<Theme>,

    // Certification badge
    certificationBadge: {
        px: 3,
        py: 2,
        bgcolor: 'primary.main',
        color: 'white',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        transition: 'transform 0.2s ease-in-out',
        textDecoration: 'none',
        '&:hover': {
            transform: 'translateY(-2px)',
        },
    } as SxProps<Theme>,

    // Skill progress bar
    skillProgress: {
        height: 6,
        borderRadius: 3,
        bgcolor: 'grey.100',
        '& .MuiLinearProgress-bar': {
            borderRadius: 3,
            bgcolor: 'primary.main',
        },
    } as SxProps<Theme>,
};

// Animation variants
export const animations = {
    fadeInUp: {
        '@keyframes fadeInUp': {
            from: {
                opacity: 0,
                transform: 'translateY(30px)',
            },
            to: {
                opacity: 1,
                transform: 'translateY(0)',
            },
        },
        animation: 'fadeInUp 0.6s ease-out',
    } as SxProps<Theme>,

    slideIn: {
        '@keyframes slideIn': {
            from: {
                opacity: 0,
                transform: 'translateX(-30px)',
            },
            to: {
                opacity: 1,
                transform: 'translateX(0)',
            },
        },
        animation: 'slideIn 0.5s ease-out',
    } as SxProps<Theme>,
};

// Responsive breakpoint helpers
export const responsive = {
    mobileOnly: { xs: 'block', md: 'none' },
    desktopOnly: { xs: 'none', md: 'block' },
    mobileContainer: { px: 2, mx: 'auto', maxWidth: 'sm' },
    desktopContainer: { px: 4, mx: 'auto', maxWidth: 'lg' },
};
