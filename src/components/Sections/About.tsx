'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import {
    TrendingUpOutlined as GrowthIcon,
    GroupOutlined as TeamIcon,
    WorkOutline as ExperienceIcon,
    BuildOutlined as TechIcon,
    SchoolOutlined as MentorIcon,
    DeveloperModeOutlined as BackendIcon
} from '@mui/icons-material';

const About: React.FC = () => {
    const achievements = [
        {
            icon: <BackendIcon sx={{ fontSize: 28 }} />,
            title: "Backend Systems",
            description: "Built and maintained robust Node.js applications, designing scalable server architectures and database solutions."
        },
        {
            icon: <TechIcon sx={{ fontSize: 28 }} />,
            title: "Full-Stack Growth",
            description: "Evolved from backend specialist to full-stack engineer, contributing to both server-side logic and user interfaces."
        },
        {
            icon: <MentorIcon sx={{ fontSize: 28 }} />,
            title: "Technical Mentoring",
            description: "Guided junior developers and apprentices, sharing knowledge gained through hands-on experience and continuous learning."
        },
        {
            icon: <ExperienceIcon sx={{ fontSize: 28 }} />,
            title: "Enterprise Solutions",
            description: "Led modernisation of large-scale systems serving thousands of users, integrating APIs and improving reliability."
        }
    ];

    const coreStrengths = [
        "Node.js Development",
        "API Integration",
        "Database Design",
        "System Integration",
        "Legacy Modernisation",
        "Agile Development"
    ];

    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: 'text.primary',
                            fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                    >
                        About Me
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                            fontWeight: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        Building reliable backend systems and full-stack solutions with a focus on performance and scalability
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }}>
                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                p: { xs: 3, md: 4 },
                                height: '100%',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'grey.200',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                                    borderColor: 'secondary.main',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 2,
                                        bgcolor: 'secondary.light',
                                        color: 'secondary.main',
                                        mr: 2,
                                    }}
                                >
                                    <GrowthIcon sx={{ fontSize: 24 }} />
                                </Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        color: 'text.primary',
                                    }}
                                >
                                    My Journey
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.7,
                                    fontSize: '1.05rem',
                                    mb: 3,
                                }}
                            >
                                Starting as an apprentice in 2017, I've developed strong expertise in backend development
                                with Node.js and Java, while expanding into full-stack capabilities. My foundation in
                                server-side development gives me a deep understanding of system architecture and performance optimization.
                            </Typography>

                            <Typography
                                variant="subtitle2"
                                sx={{ color: 'text.primary', mb: 2, fontWeight: 600 }}
                            >
                                Core Strengths
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1,
                                    alignItems: 'flex-start',
                                }}
                            >
                                {coreStrengths.map((strength) => (
                                    <Chip
                                        key={strength}
                                        label={strength}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            borderColor: 'secondary.main',
                                            color: 'secondary.main',
                                            fontSize: '0.75rem',
                                            flexShrink: 0,
                                            '&:hover': {
                                                bgcolor: 'secondary.light',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                p: { xs: 3, md: 4 },
                                height: '100%',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'grey.200',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                                    borderColor: 'secondary.main',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 2,
                                        bgcolor: 'secondary.light',
                                        color: 'secondary.main',
                                        mr: 2,
                                    }}
                                >
                                    <TeamIcon sx={{ fontSize: 24 }} />
                                </Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        color: 'text.primary',
                                    }}
                                >
                                    What I Do
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.7,
                                    fontSize: '1.05rem',
                                }}
                            >
                                I build robust backend systems using Node.js, integrate with external APIs and services,
                                and work with databases like MySQL and PostgreSQL. While my strength is server-side
                                development, I also create complete full-stack solutions using React and TypeScript when projects require it.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    {achievements.map((achievement, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    borderRadius: 2,
                                    border: '1px solid',
                                    borderColor: 'grey.100',
                                    bgcolor: 'background.paper',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        borderColor: 'secondary.main',
                                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        p: 2,
                                        borderRadius: '50%',
                                        bgcolor: 'secondary.light',
                                        color: 'secondary.main',
                                        mb: 2,
                                        mx: 'auto',
                                    }}
                                >
                                    {achievement.icon}
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        color: 'text.primary',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    {achievement.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.6,
                                        flex: 1,
                                    }}
                                >
                                    {achievement.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
