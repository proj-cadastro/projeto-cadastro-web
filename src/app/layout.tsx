"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#949494",
    },
    secondary: {
      main: "#eeeeee",
    },
    background: {
      default: "#d8d8d8", // Cor de fundo padrão
      paper: "#ffffff", // Cor de fundo para componentes como Paper
    },
  },
});

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
