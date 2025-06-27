import { createTheme } from '@mui/material/styles';

const COLORS = {
    BACKGROUND: '#FFFFFF',
    PAPER: '#FAFAFA',
    PRIMARY: '#111827',
    PRIMARY_LIGHT: '#374151',
    ACCENT: '#F59E0B',
    ACCENT_DARK: '#D97706',
    TEXT_MAIN: '#111827',
    TEXT_SECONDARY: '#6B7280',
    BORDER: '#E5E7EB',
    HOVER_BG: '#F5F5F5',
    GREY: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
    }
};

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: COLORS.PRIMARY,
            light: COLORS.PRIMARY_LIGHT,
            dark: '#000000',
        },
        secondary: {
            main: COLORS.ACCENT,
            dark: COLORS.ACCENT_DARK,
            light: '#FBF3E6',
        },
        background: {
            default: COLORS.BACKGROUND,
            paper: COLORS.PAPER,
        },
        text: {
            primary: COLORS.TEXT_MAIN,
            secondary: COLORS.TEXT_SECONDARY,
        },
        grey: COLORS.GREY,
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        h1: {
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            color: COLORS.TEXT_MAIN,
        },
        h2: {
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: COLORS.TEXT_MAIN,
        },
        h3: {
            fontWeight: 600,
            lineHeight: 1.3,
            color: COLORS.TEXT_MAIN,
        },
        body1: {
            lineHeight: 1.6,
            color: COLORS.TEXT_SECONDARY,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: COLORS.BACKGROUND,
                    color: COLORS.TEXT_MAIN,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: COLORS.BACKGROUND,
                    color: COLORS.TEXT_MAIN,
                    borderBottom: `1px solid ${COLORS.BORDER}`,
                    boxShadow: 'none',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    padding: '10px 20px',
                    transition: 'all 0.2s ease',
                },
                contained: {
                    backgroundColor: COLORS.PRIMARY,
                    color: '#FFFFFF',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: COLORS.PRIMARY_LIGHT,
                        boxShadow: '0 4px 12px rgba(17, 24, 39, 0.15)',
                    },
                },
                outlined: {
                    borderColor: COLORS.BORDER,
                    color: COLORS.TEXT_MAIN,
                    borderWidth: 1.5,
                    '&:hover': {
                        borderColor: COLORS.PRIMARY,
                        backgroundColor: COLORS.HOVER_BG,
                        borderWidth: 1.5,
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: COLORS.PAPER,
                    borderRadius: 12,
                    border: `1px solid ${COLORS.BORDER}`,
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: COLORS.GREY[100],
                },
                bar: {
                    borderRadius: 3,
                    backgroundColor: COLORS.ACCENT,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: COLORS.BACKGROUND,
                        '& fieldset': {
                            borderColor: COLORS.BORDER,
                        },
                        '&:hover fieldset': {
                            borderColor: COLORS.TEXT_SECONDARY,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: COLORS.PRIMARY,
                        },
                    },
                },
            },
        },
    },
});

export default theme;
export { COLORS };
