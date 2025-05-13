// src/app/page.tsx
import { Box } from '@mui/material';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Skills from '../components/Sections/Skills';
import Contact from '../components/Sections/Contact';
import { metadata } from './metadata'; // Import the metadata

// Re-export the metadata
export { metadata };

export default function Page() {
    return (
        <Box component="main">
            <Hero />
            <Box id="about">
                <About />
            </Box>
            <Box id="skills">
                <Skills />
            </Box>
            <Box id="contact">
                <Contact />
            </Box>
        </Box>
    );
}
