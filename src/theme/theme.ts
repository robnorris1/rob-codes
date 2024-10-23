// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#D4A373',  // Brown tone
            light: '#FAEDCD', // Light beige
            dark: '#CCD5AE',  // Sage green
        },
        secondary: {
            main: '#E9EDC9',  // Light sage
            light: '#FEFAE0', // Cream
            dark: '#D4A373',  // Brown tone
        },
        background: {
            default: '#FEFAE0', // Cream background
            paper: '#FAEDCD',   // Light beige paper
        },
        text: {
            primary: '#4A4A4A',   // Dark gray for better readability
            secondary: '#6B705C',  // Muted green-gray
        },
        // Custom colors that can be referenced in sx props
        custom: {
            sage: '#CCD5AE',
            lightSage: '#E9EDC9',
            cream: '#FEFAE0',
            beige: '#FAEDCD',
            brown: '#D4A373',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#4A4A4A',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            color: '#4A4A4A',
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#4A4A4A',
        },
        body1: {
            color: '#6B705C',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FEFAE0', // Cream background
                    color: '#4A4A4A',          // Dark gray text
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    padding: '8px 16px',
                },
                contained: {
                    backgroundColor: '#D4A373',
                    '&:hover': {
                        backgroundColor: '#C49366',
                    },
                },
                outlined: {
                    borderColor: '#D4A373',
                    color: '#D4A373',
                    '&:hover': {
                        borderColor: '#C49366',
                        backgroundColor: 'rgba(212, 163, 115, 0.04)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FAEDCD',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FAEDCD',
                },
            },
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            sage: string;
            lightSage: string;
            cream: string;
            beige: string;
            brown: string;
        };
    }
    interface PaletteOptions {
        custom?: {
            sage: string;
            lightSage: string;
            cream: string;
            beige: string;
            brown: string;
        };
    }
}

export default theme;
