// src/components/Sections/Skills.tsx
'use client';

import React from 'react';
import { Box, Container, Typography, Paper, LinearProgress, Grid, Link } from '@mui/material';
import {
    Computer as ComputerIcon,
    Storage as StorageIcon,
    Cloud as CloudIcon,
    Architecture as ArchitectureIcon,
    Verified as VerifiedIcon  // Fixed import name
} from '@mui/icons-material';

interface Certification {
    name: string;
    link: string;
}

const certifications: Certification[] = [
    {
        name: 'AWS Certified Cloud Practitioner',
        link: 'https://www.credly.com/users/rob-norris.4ed21e49'
    },
    {
        name: 'AWS Well-Architected Proficient',
        link: 'https://www.credly.com/users/rob-norris.4ed21e49'
    }
];

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: Array<{
        name: string;
        level: number;
    }>;
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend Development',
        icon: <ComputerIcon />,
        skills: [
            { name: 'TypeScript', level: 90 },
            { name: 'React', level: 85 },
            { name: 'Next.js', level: 85 },
        ]
    },
    {
        title: 'Backend Development',
        icon: <ArchitectureIcon />,
        skills: [
            { name: 'Node.js', level: 80 },
            { name: 'Java/Spring', level: 85 },
            { name: 'REST APIs', level: 85 },
        ]
    },
    {
        title: 'Database & Storage',
        icon: <StorageIcon />,
        skills: [
            { name: 'MySQL', level: 80 },
            { name: 'PostgreSQL', level: 75 },
            { name: 'Oracle SQL', level: 75 },
        ]
    },
    {
        title: 'DevOps & Cloud',
        icon: <CloudIcon />,
        skills: [
            { name: 'AWS', level: 80 },
            { name: 'Azure', level: 60 },
            { name: 'CI/CD', level: 80 },
        ]
    }
];

const Skills: React.FC = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ mb: 6 }}
                >
                    Skills & Expertise
                </Typography>

                {/* Certifications */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 6
                }}>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        gutterBottom
                        sx={{ mb: 3 }}
                    >
                        AWS Certified
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        flexWrap: 'wrap'
                    }}>
                        {certifications.map((cert) => (
                            <Link
                                key={cert.name}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                            >
                                <Paper
                                    sx={{
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
                                        '&:hover': {
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <VerifiedIcon sx={{ fontSize: '1.1rem' }} />
                                    {cert.name}
                                </Paper>
                            </Link>
                        ))}
                    </Box>
                </Box>

                {/* Skills Grid */}
                <Grid container spacing={4}>
                    {skillCategories.map((category) => (
                        <Grid item xs={12} md={6} key={category.title}>
                            <Paper
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    mb: 3,
                                    color: 'primary.main'
                                }}>
                                    {category.icon}
                                    <Typography variant="h6">
                                        {category.title}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                    {category.skills.map((skill) => (
                                        <Box key={skill.name}>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                mb: 0.5
                                            }}>
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
                                                    }
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
