import { createTheme } from "@mui/material/styles";

export const fontFamily = {
  urbanist: "Urbanist",
  mulish: "Mulish",
};

export const colors = {
  gray: "#FFFAEA",
  pink: "#FAC3FF",
  blue: "#85D9F1",
  lemon: "#CEFFCC",
  grayBorder: "#EAECF0",
  black: "#000000",
  darkAsh: "#292929",
  white: "white",
};

export const taskManagementTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 575,
      md: 768,
      lg: 1199,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#7B1984",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Mulish",
      color: "#1E212A",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableElevation: true,
        disableTouchRipple: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});
