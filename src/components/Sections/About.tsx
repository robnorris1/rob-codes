// src/components/Sections/About.tsx
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FC } from 'react';
import { Person as PersonIcon, Code as CodeIcon } from '@mui/icons-material';

const About: FC = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                py: { xs: 6, md: 10 },
                position: 'relative'
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                    sx={{
                        mb: { xs: 4, md: 6 },
                        color: 'text.primary',
                        fontWeight: 500,
                        position: 'relative'
                    }}
                >
                    About Me
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                height: '100%',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                border: '1px solid',
                                borderColor: 'grey.100',
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                }
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                mb: 2,
                                color: 'primary.main'
                            }}>
                                <PersonIcon />
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        color: 'text.primary',
                                        fontWeight: 500
                                    }}
                                >
                                    Who I Am
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    lineHeight: 1.8,
                                    letterSpacing: '0.015em'
                                }}
                            >
                                I am a passionate developer with expertise in modern web technologies.
                                I love creating elegant solutions to complex problems and have a keen eye
                                for detail in everything I build.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                height: '100%',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                border: '1px solid',
                                borderColor: 'grey.100',
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                }
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                mb: 2,
                                color: 'primary.main'
                            }}>
                                <CodeIcon />
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        color: 'text.primary',
                                        fontWeight: 500
                                    }}
                                >
                                    What I Do
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    lineHeight: 1.8,
                                    letterSpacing: '0.015em'
                                }}
                            >
                                I specialize in building responsive web applications using React, Next.js,
                                and TypeScript. I focus on creating intuitive user experiences while ensuring
                                code quality and maintainability.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
