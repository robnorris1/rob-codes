import React from 'react';
import { Box, Paper, Typography, Link } from '@mui/material';
import {
    Launch as LaunchIcon,
    Email as EmailIcon,
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
} from '@mui/icons-material';

interface ContactMethodProps {
    type: 'email' | 'linkedin' | 'github';
    label: string;
    value: string;
    link: string;
}

const getIcon = (type: ContactMethodProps['type']) => {
    switch (type) {
        case 'email':
            return <EmailIcon />;
        case 'linkedin':
            return <LinkedInIcon />;
        case 'github':
            return <GitHubIcon />;
        default:
            return <EmailIcon />;
    }
};

export const ContactMethod: React.FC<ContactMethodProps> = ({
                                                                type,
                                                                label,
                                                                value,
                                                                link,
                                                            }) => (
    <Link href={link} target="_blank" rel="noopener noreferrer" underline="none">
        <Paper
            sx={{
                p: 3,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'grey.200',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: 'secondary.main',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                    sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: 'secondary.light',
                        color: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {getIcon(type)}
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}
                    >
                        {label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {value}
                    </Typography>
                </Box>
                <LaunchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
            </Box>
        </Paper>
    </Link>
);
