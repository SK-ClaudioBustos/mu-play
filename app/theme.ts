'use client'
import { createTheme } from "@mui/material/styles";
import { Kanit } from 'next/font/google';

const font = Kanit({ weight: "400", subsets: ['latin'] })

const theme = createTheme({
    typography: {
        fontFamily: font.style.fontFamily,
        fontWeightMedium: font.style.fontWeight,
      },
  });

export default theme;