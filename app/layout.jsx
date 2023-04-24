"use client";

import style from "./src/globals.css"
import { darkTheme, lightTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Navigation from '../components/ui/Navigation/navigation';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body>
          <header className="header">
            <Container maxWidth="lg">
              <Navigation />
            </Container>
          </header>
          <main>
            <Container maxWidth="lg">
              {children}
            </Container>
          </main>
        </body>
      </ThemeProvider>
    </html>
  )
}
