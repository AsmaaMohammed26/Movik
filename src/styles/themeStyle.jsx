import { createTheme, ThemeProvider } from "@mui/material";
import { useTheme } from "../contexts/themeContext";
import CssBaseline from "@mui/material/CssBaseline";
// import { useLang } from "../contexts/langContext";

export default function CustomThemeProvider({ children }) {
  const { theme: mode } = useTheme();
  // const { language } = useLang();

  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f9fafb",
              paper: "#ffffff",
            },
            primary: {
              main: "#262e3b", 
              contrastText: "#ffffff", 
            },
            secondary: {
              main: "#f9fafb",
              contrastText: "#050b16",
            },

            text: {
              primary: "#050b16",
              secondary: "#4b5563",
            },
          }
        : {
            background: {
              default: "#050b16",
              paper: "#0a0f1a",
            },
            primary: {
              main: "#f9fafb",
              contrastText: "#050b16",
            },
            secondary: {
              main: "#050b16",
              contrastText: "#f9fafb",
            },
            text: {
              primary: "#e0e0e0",
              secondary: "#9ca3af",
            },
          }),
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#576275" : "#050B16",
            color: mode === "light" ? "#050B16" : "#050B16",

          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: mode === "light" ? "#050B16" : "white",
            lineHeight: 1.2
          },
        },
      },
    },
    typography: {
      fontFamily:"Montserrat Alternates",
       lineHeight: 1.6
    },
    
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
