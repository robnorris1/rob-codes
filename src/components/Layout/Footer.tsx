import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} Rob-Codes. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
