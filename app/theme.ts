'use client'
import { createTheme } from "@mui/material/styles";
import { Kanit } from 'next/font/google';
import { color1, color2, color3 } from "./ui/utils/styles/colors";

const font = Kanit({ weight: "400", subsets: ['latin'] })

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
    fontWeightMedium: font.style.fontWeight,
  },
  palette: {
    primary: {
      main: color3,
      light: color3,
      dark: color3,
      contrastText: color3,
    },
    secondary: {
      main: color2,
      light: color2,
      dark: color2,
      contrastText: color2,
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          backgroundColor: color1,
          borderRadius: "0px"
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          ":last-child": {
            paddingBottom: "0px"
          },
        }
      }
    }
  }
});

export default theme;