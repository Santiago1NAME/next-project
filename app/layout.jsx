"use client";

import './src/globals.css';
import { darkTheme, lightTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
