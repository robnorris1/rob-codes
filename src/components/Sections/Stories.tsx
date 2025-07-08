'use client';

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Button,
    Chip,
    Collapse,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    BugReport as BugIcon,
    Transform as ModernizeIcon,
    Speed as PerformanceIcon,
    LinkOutlined as IntegrationIcon,
    Schedule as TimeIcon,
} from '@mui/icons-material';

interface Story {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    problem: string;
    solution: string;
    outcome: string;
    techUsed: string[];
    timeframe: string;
    category: 'legacy' | 'debugging' | 'performance' | 'integration';
}

const Stories: React.FC = () => {
    const [expandedStory, setExpandedStory] = useState<string | null>(null);

    const stories: Story[] = [
        {
            id: 'legacy-modernisation',
            title: 'Modernizing Enterprise Systems',
            subtitle: 'Redesigning a large-scale time management system',
            icon: <ModernizeIcon />,
            category: 'legacy',
            timeframe: 'Current project',
            problem: 'Working with a time management system serving 2,400 retail locations that needed modernisation and better integration capabilities.',
            solution: 'Led the complete redesign and modernisation effort, focusing on integrating third-party APIs to improve reliability and functionality while maintaining seamless operations during the transition.',
            outcome: 'Successfully modernized the system architecture while keeping all 2,400+ locations operational throughout the process.',
            techUsed: ['Node.js', 'API Integration', 'System Architecture'],
        },
        {
            id: 'backend-transition',
            title: 'From Backend to Full-Stack',
            subtitle: 'Expanding skills while building UI systems',
            icon: <PerformanceIcon />,
            category: 'performance',
            timeframe: '2 years',
            problem: 'Started as a backend-focused developer but needed to contribute to frontend development and help build comprehensive UI systems for the team.',
            solution: 'Proactively learned React and Next.js while transitioning from backend to full-stack development. Contributed to building a comprehensive UI-Kit for the team.',
            outcome: 'Successfully made the transition and now work effectively across the full stack, contributing to both backend systems and user interfaces.',
            techUsed: ['React', 'Next.js', 'Node.js', 'UI Development'],
        },
        {
            id: 'apprentice-journey',
            title: 'Learning While Building',
            subtitle: 'Growing from apprentice to mentoring others',
            icon: <BugIcon />,
            category: 'debugging',
            timeframe: '4 years',
            problem: 'Started as an apprentice developer working on insurer products and learning the ropes of professional software development.',
            solution: 'Developed and maintained insurer products, designed and implemented new features, conducted peer code reviews, and worked closely with QA teams to ensure quality.',
            outcome: 'Progressed from apprentice to independently leading feature work and eventually mentoring other apprentices, sharing knowledge gained through my own journey.',
            techUsed: ['Java', 'Software Development', 'Code Reviews', 'Mentoring'],
        },
        {
            id: 'serverless-redesign',
            title: 'Rebuilding for the Modern Era',
            subtitle: 'Moving from legacy applications to serverless solutions',
            icon: <IntegrationIcon />,
            category: 'integration',
            timeframe: '1 year',
            problem: 'Inherited archaic applications that were difficult to maintain and didn\'t scale well with modern requirements.',
            solution: 'Redesigned these applications using a new serverless solution approach, demonstrating leadership and technical expertise in modernizing the architecture.',
            outcome: 'Successfully migrated legacy applications to a more maintainable and scalable serverless architecture.',
            techUsed: ['Serverless Architecture', 'Application Redesign', 'Legacy Migration'],
        }
    ];

    const handleExpandClick = (storyId: string) => {
        setExpandedStory(expandedStory === storyId ? null : storyId);
    };

    const getCategoryColor = (category: Story['category']) => {
        const colors = {
            legacy: '#8B5CF6',
            debugging: '#EF4444',
            performance: '#10B981',
            integration: '#F59E0B',
        };
        return colors[category];
    };

    return (
        <Box
            component="section"
            id="stories"
            sx={{
                py: { xs: 12, md: 20 },
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                bgcolor: 'grey.50',
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
                        Behind the Scenes
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
                        Real stories from the trenches - the challenges, solutions, and
                        lessons learned from building software in the real world
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {stories.map((story) => (
                        <Grid item xs={12} lg={6} key={story.id}>
                            <Paper
                                sx={{
                                    borderRadius: 3,
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    height: 'fit-content',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                                        borderColor: 'secondary.main',
                                    },
                                }}
                            >
                                <Box sx={{ p: 4, pb: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                                        <Box
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 2,
                                                bgcolor: `${getCategoryColor(story.category)}20`,
                                                color: getCategoryColor(story.category),
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {story.icon}
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: 'text.primary',
                                                    mb: 1,
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {story.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'text.secondary',
                                                    mb: 2,
                                                }}
                                            >
                                                {story.subtitle}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <TimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                                                <Typography variant="caption" color="text.secondary">
                                                    {story.timeframe}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box sx={{ mb: 3 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {story.techUsed.slice(0, 3).map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        fontSize: '0.7rem',
                                                        height: 24,
                                                        borderColor: 'grey.300',
                                                        color: 'text.secondary',
                                                    }}
                                                />
                                            ))}
                                            {story.techUsed.length > 3 && (
                                                <Chip
                                                    label={`+${story.techUsed.length - 3} more`}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        fontSize: '0.7rem',
                                                        height: 24,
                                                        borderColor: 'grey.300',
                                                        color: 'text.secondary',
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Box>

                                    <Button
                                        onClick={() => handleExpandClick(story.id)}
                                        endIcon={
                                            <ExpandMoreIcon
                                                sx={{
                                                    transform: expandedStory === story.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                        }
                                        sx={{
                                            textTransform: 'none',
                                            color: 'text.secondary',
                                            '&:hover': {
                                                color: 'primary.main',
                                                bgcolor: 'transparent',
                                            },
                                        }}
                                    >
                                        {expandedStory === story.id ? 'Show Less' : 'Read the Story'}
                                    </Button>
                                </Box>

                                <Collapse in={expandedStory === story.id}>
                                    <Box sx={{ px: 4, pb: 4 }}>
                                        <Box sx={{ borderTop: '1px solid', borderColor: 'grey.200', pt: 4 }}>
                                            <Box sx={{ mb: 4 }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{ color: '#EF4444', fontWeight: 600, mb: 2 }}
                                                >
                                                    The Challenge
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                                                >
                                                    {story.problem}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mb: 4 }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{ color: '#10B981', fontWeight: 600, mb: 2 }}
                                                >
                                                    The Approach
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                                                >
                                                    {story.solution}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mb: 0 }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{ color: '#8B5CF6', fontWeight: 600, mb: 2 }}
                                                >
                                                    The Result
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                                                >
                                                    {story.outcome}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Collapse>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Stories;
