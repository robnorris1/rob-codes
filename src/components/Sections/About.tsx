// src/components/Sections/About.tsx
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FC } from 'react';

const About: FC = () => {
    return (
        <Box sx={{ bgcolor: 'background.default', py: 8 }} id="about">
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    About Me
                </Typography>
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Who I Am
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                I am a passionate developer with expertise in modern web technologies. I love creating elegant solutions to complex problems.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                What I Do
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                I specialize in building responsive web applications using React, Next.js, and TypeScript. I focus on creating intuitive user experiences.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
