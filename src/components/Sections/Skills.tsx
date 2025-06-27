'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    LinearProgress,
    Stack,
    Chip,
    Link
} from '@mui/material';
import {
    Computer as ComputerIcon,
    Storage as StorageIcon,
    Cloud as CloudIcon,
    Architecture as ArchitectureIcon,
    Verified as VerifiedIcon,
    TrendingUp as TrendingIcon
} from '@mui/icons-material';

const Skills: React.FC = () => {
    const certifications = [
        {
            name: 'AWS Certified Cloud Practitioner',
            link: 'https://www.credly.com/users/rob-norris.4ed21e49',
            date: '2024'
        },
        {
            name: 'AWS Well-Architected Proficient',
            link: 'https://www.credly.com/users/rob-norris.4ed21e49',
            date: '2024'
        }
    ];

    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <ComputerIcon />,
            color: '#3B82F6',
            skills: [
                { name: 'TypeScript', level: 90, trend: 'up' },
                { name: 'React', level: 85, trend: 'up' },
                { name: 'Next.js', level: 85, trend: 'up' },
            ]
        },
        {
            title: 'Backend Development',
            icon: <ArchitectureIcon />,
            color: '#10B981',
            skills: [
                { name: 'Node.js', level: 80, trend: 'up' },
                { name: 'Java/Spring', level: 85, trend: 'stable' },
                { name: 'REST APIs', level: 85, trend: 'up' },
            ]
        },
        {
            title: 'Database & Storage',
            icon: <StorageIcon />,
            color: '#8B5CF6',
            skills: [
                { name: 'MySQL', level: 80, trend: 'stable' },
                { name: 'PostgreSQL', level: 75, trend: 'up' },
                { name: 'Oracle SQL', level: 75, trend: 'stable' },
            ]
        },
        {
            title: 'DevOps & Cloud',
            icon: <CloudIcon />,
            color: '#F59E0B',
            skills: [
                { name: 'AWS', level: 80, trend: 'up' },
                { name: 'Azure', level: 60, trend: 'up' },
                { name: 'CI/CD', level: 80, trend: 'up' },
            ]
        }
    ];

    const SkillBar = ({ skill }: { skill: any }) => (
        <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                    {skill.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                        {skill.level}%
                    </Typography>
                    {skill.trend === 'up' && (
                        <TrendingIcon sx={{ fontSize: 16, color: 'success.main', transform: 'rotate(0deg)' }} />
                    )}
                </Box>
            </Box>
            <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'grey.100',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        background: `linear-gradient(90deg, #F59E0B 0%, #F59E0B 100%)`,
                    },
                }}
            />
        </Box>
    );

    return (
        <Box
            component="section"
            id="skills"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: 'grey.50',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
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
                        Skills & Expertise
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
                        Technologies and tools I use to bring ideas to life
                    </Typography>
                </Box>

                {/* Certifications */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            mb: 3,
                            color: 'text.primary',
                        }}
                    >
                        AWS Certified Professional
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {certifications.map((cert, index) => (
                            <Link
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                            >
                                <Paper
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: 'primary.main',
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        minWidth: { xs: '280px', sm: 'auto' },
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 25px rgba(17, 24, 39, 0.2)',
                                        },
                                    }}
                                >
                                    <VerifiedIcon sx={{ fontSize: 20 }} />
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                                            {cert.name}
                                        </Typography>
                                        <Typography variant="caption" sx={{ opacity: 0.8 }}>
                                            {cert.date}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Link>
                        ))}
                    </Stack>
                </Box>

                <Grid container spacing={4}>
                    {skillCategories.map((category, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: 3,
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    bgcolor: 'background.paper',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                                        borderColor: 'secondary.main',
                                    },
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                    <Box
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            bgcolor: 'secondary.light',
                                            color: 'secondary.main',
                                            mr: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {category.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: 'text.primary',
                                        }}
                                    >
                                        {category.title}
                                    </Typography>
                                </Box>

                                <Box>
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillBar key={skillIndex} skill={skill} />
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            mb: 3,
                            color: 'text.primary',
                        }}
                    >
                        Also Working With
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        flexWrap="wrap"
                        sx={{ gap: 1 }}
                    >
                        {['Docker', 'Kubernetes', 'GraphQL', 'MongoDB', 'Redis', 'Terraform', 'Python', 'Go'].map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                variant="outlined"
                                sx={{
                                    borderColor: 'grey.300',
                                    color: 'text.secondary',
                                    '&:hover': {
                                        borderColor: 'secondary.main',
                                        color: 'secondary.main',
                                        bgcolor: 'secondary.light',
                                    },
                                }}
                            />
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Skills;
