"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import hotjar  from "@hotjar/browser";
import "./globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#949494",
    },
    secondary: {
      main: "#eeeeee",
    },
  },
});

// Substitua 'YOUR_HOTJAR_ID' e 'YOUR_HOTJAR_VERSION' pelos valores fornecidos pela sua conta do Hotjar
const HOTJAR_ID = 5234028;
const HOTJAR_VERSION = 6;

// Inicializa o Hotjar
hotjar.init(HOTJAR_ID, HOTJAR_VERSION);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
