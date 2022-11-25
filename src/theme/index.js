import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const DARK_MODE = "dark";
export const LIGHT_MODE = "light";

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: DARK_MODE,
      primary: {
        main: blue[500],
      },
    },
    typography: {
      fontFamily: "Nunito Sans",
    },
    breakpoints: {
      values: {
        sm: 400,
      },
    },
  })
);

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
    typography: {
      fontFamily: "Nunito Sans",
    },
    breakpoints: {
      values: {
        sm: 400,
      },
    },
  })
);
