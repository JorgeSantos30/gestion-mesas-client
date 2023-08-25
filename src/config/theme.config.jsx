import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/poppins"


const themePalette = {
  BACKGROUND: "#f7f7f8",
  ORANGE_PRIMARY: "#00A99F",
  FONT_GLOBAL: "Poppins",
  //ALERT STYLES
  ERROR_MAIN: "#f44336",
  BG_ERROR_MAIN: "rgba(244, 67, 54, 0.1)",
  SUCCESS_MAIN: "#66bb6a",
  BG_SUCCESS_MAIN: "rgba(102, 187, 106, 0.1)",
};

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.BACKGROUND,
    },
    primary: {
      main: themePalette.ORANGE_PRIMARY,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
    h6: {
      color: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.8em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN,
        },
        standardSuccess: {
          border: `1px solid ${themePalette.BG_SUCCESS_MAIN}`,
        },
      },
    },
  },
});

export const ThemeConfig = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
