import ExpandMore from "@mui/icons-material/ExpandMore";
import { createTheme } from "@mui/material/styles";

export const fontFamily = {
  urbanist: "Urbanist",
  mulish: "Mulish",
};

export const colors = {
  primary: "#7B1984",
  gray: "#FFFAEA",
  pink: "#FAC3FF",
  blue: "#85D9F1",
  lemon: "#CEFFCC",
  grayBorder: "#EAECF0",
  black: "#000000",
  darkAsh: "#292929",
  white: "white",
  black2: "#2F2F2F",
  black3: "#00000099",
  red: "#DA2F2F",
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
          textTransform: "capitalize",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMore,
      },
      styleOverrides: {
        root: {
          fontSize: "12px",
          color: colors.black3,
          fontWeight: "600",
          borderRadius: "20px",
        },
      },
    },
  },
});
