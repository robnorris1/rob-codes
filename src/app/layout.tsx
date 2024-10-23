'use client'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme/theme';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}
