"use client";

import React, { useState } from "react";
import { registerUserFields } from "@/components/UI/atoms/RegisterFields";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import { IUser } from "@/interfaces/IUser";
import { UserService } from "@/service/Service";
import { Box, Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";

export default function RegisterComponentizado() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const router = useRouter();

  // Função para fechar o Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // Função para enviar os dados do novo usuário
  const postUser = async (data: Partial<IUser>) => {
    try {
      await UserService.criar(data); // Chamada para criar o usuário
      setSnackbarMessage("Usuário cadastrado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setTimeout(() => router.push("/user/login"), 2000); // Redireciona após 2 segundos
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      setSnackbarMessage("Erro ao cadastrar o usuário.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <DynamicForm
        title={
          <TitleRegister
            text="Cadastro de Usuário"
            subText="Fatec Votorantim"
          />
        }
        fields={registerUserFields}
        onSubmit={postUser}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
