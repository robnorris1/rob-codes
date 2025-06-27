import React from 'react';
import {Box, Typography, Paper, LinearProgress, Link, Container} from '@mui/material';
import {SxProps, Theme} from '@mui/material/styles';

interface BrandLogoProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    sx?: SxProps<Theme>;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({variant = 'h6', sx}) => (
    <Typography
        variant={variant}
        sx={{
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
            '& .brace': {
                color: 'primary.main',
                fontWeight: 'bold',
            },
            '& .underscore': {
                color: 'primary.main',
            },
            ...sx,
        }}
    >
        <span className="brace">{'{'}</span>
        {' rob'}
        <span className="underscore">_</span>
        {'codes '}
        <span className="brace">{'}'}</span>
    </Typography>
);

interface SectionContainerProps {
    children: React.ReactNode;
    title?: string;
    variant?: 'default' | 'alt';
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
                                                                      children,
                                                                      title,
                                                                      variant = 'default',
                                                                      maxWidth = 'lg',
                                                                      id
                                                                  }) => (
    <Box
        component="section"
        id={id}
        sx={{
            py: 8,
            bgcolor: variant === 'default' ? 'background.default' : 'background.paper',
        }}
    >
        <Container maxWidth={maxWidth} sx={{px: {xs: 2, md: 4}}}>
            {title && (
                <Typography
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{mb: 6}}
                >
                    {title}
                </Typography>
            )}
            {children}
        </Container>
    </Box>
);

interface HoverCardProps {
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}

export const HoverCard: React.FC<HoverCardProps> = ({children, sx}) => (
    <Paper
        sx={{
            p: 3,
            height: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'grey.200',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
            },
            ...sx,
        }}
    >
        {children}
    </Paper>
);

interface IconHeaderProps {
    icon: React.ReactNode;
    title: string;
    variant?: 'h4' | 'h5' | 'h6';
}

export const IconHeader: React.FC<IconHeaderProps> = ({icon, title, variant = 'h5'}) => (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        mb: 2,
        color: 'primary.main',
    }}>
        {icon}
        <Typography variant={variant} component="h3" color="text.primary" fontWeight={500}>
            {title}
        </Typography>
    </Box>
);

interface SkillProgressProps {
    skill: {
        name: string;
        level: number;
    };
}

export const SkillProgress: React.FC<SkillProgressProps> = ({skill}) => (
    <Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 0.5}}>
            <Typography variant="body2" color="text.secondary">
                {skill.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {skill.level}%
            </Typography>
        </Box>
        <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{
                height: 6,
                borderRadius: 3,
                bgcolor: 'grey.100',
                '& .MuiLinearProgress-bar': {
                    borderRadius: 3,
                    bgcolor: 'primary.main',
                },
            }}
        />
    </Box>
);

interface CertificationBadgeProps {
    certification: {
        name: string;
        link: string;
    };
    icon?: React.ReactNode;
}

export const CertificationBadge: React.FC<CertificationBadgeProps> = ({
                                                                          certification,
                                                                          icon
                                                                      }) => (
    <Link
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
    >
        <Box sx={{
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
        }}>
            {icon}
            {certification.name}
        </Box>
    </Link>
);

export const useScrollToSection = () => {
    return (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
};
