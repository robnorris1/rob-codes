'use client';

import React from 'react';
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
            <main style={{ backgroundColor: theme.palette.background.default }}>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}

