"use client";

import { useState } from "react";
import LoginCard from "../../../components/UI/organisms/LoginCard";
import { UserService } from "../../../service/Service"; // Ajuste o caminho se necessário
import { Snackbar, Alert, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const router = useRouter();

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await UserService.login(credentials);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setSnackbarMessage("Login realizado com sucesso!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setTimeout(() => {
          router.push("/home");
        }, 2000);
      }
    } catch (err) {
      setError("Usuário ou senha incorretos.");
      setSnackbarMessage("Erro ao fazer login. Verifique suas credenciais.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      console.error("Erro ao fazer login:", err);
    }
  };

  return (
    <Box>
      <LoginCard onLogin={handleLogin} error={error} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
