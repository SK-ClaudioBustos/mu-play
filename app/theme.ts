'use client'
import { createTheme } from "@mui/material/styles";
import { Kanit } from 'next/font/google';

const font = Kanit({ weight: "400", subsets: ['latin'] })

const theme = createTheme({
    typography: {
        fontFamily: font.style.fontFamily,
        fontWeightMedium: font.style.fontWeight,
    },
     palette: {
        primary: {
          main: '#96FAD4',
          light: '#96FAD4',
          dark: '#96FAD4',
          contrastText: '#96FAD4',
        },
        secondary: {
          main: '#00613C',
          light: '#00613C',
          dark: '#00613C',
          contrastText: '#00613C',
        },
    },
    components: {
      MuiMenu: {
        styleOverrides: {
          paper: {
            boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
            backgroundColor: "#CCFFEB"
          }
        }
      }
    }  
  });

export default theme;