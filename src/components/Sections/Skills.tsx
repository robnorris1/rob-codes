// src/components/Sections/Skills.tsx
'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress, Chip } from '@mui/material';

interface Skill {
    name: string;
    level: number;
    category: string;
}

const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Next.js', level: 80, category: 'Frontend' },
    { name: 'Material UI', level: 85, category: 'Frontend' },
    { name: 'CSS/SASS', level: 85, category: 'Frontend' },

    // Backend
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 70, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },

    // Other
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'AWS', level: 65, category: 'Tools' },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <Paper
        elevation={2}
        sx={{
            p: 2,
            height: '100%',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
                transform: 'translateY(-5px)',
            }
        }}
    >
        <Typography variant="h6" gutterBottom>
            {skill.name}
        </Typography>
        <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'grey.200',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: 5,
                    }
                }}
            />
        </Box>
        <Box sx={{ minWidth: 35, mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
                {`${Math.round(skill.level)}%`}
            </Typography>
        </Box>
    </Paper>
);

const Skills: React.FC = () => {
    const categories = Array.from(new Set(skills.map(skill => skill.category)));

    return (
        <Box sx={{ py: 8, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Technical Skills
                </Typography>

                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                    {categories.map((category) => (
                        <Chip
                            key={category}
                            label={category}
                            color="primary"
                            variant="outlined"
                            sx={{ m: 0.5 }}
                        />
                    ))}
                </Box>

                <Grid container spacing={3}>
                    {skills.map((skill) => (
                        <Grid item xs={12} sm={6} md={4} key={skill.name}>
                            <SkillCard skill={skill} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
