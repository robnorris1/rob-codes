import { Box } from '@mui/material';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Stories from '../components/Sections/Stories';
import Skills from '../components/Sections/Skills';
import Contact from "@/components/Sections/Contact";

export default function Page() {
    return (
        <Box component="main">
            <Hero />
            <Box id="about">
                <About />
            </Box>
            <Box id="stories">
                <Stories />
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
