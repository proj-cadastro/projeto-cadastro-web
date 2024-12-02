"use client";

import React, { useState } from "react";
import { registerUserFields } from "@/components/UI/atoms/RegisterFields";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import { IUser } from "@/interfaces/IUser";
import { UserService } from "@/service/Service";
import { Box, Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import LoginPrompt from "@/components/UI/molecules/LoginPrompt";

export default function RegisterComponentizado() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const router = useRouter();

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const postUser = async (data: Partial<IUser>) => {
    try {
      await UserService.criar(data);
      setSnackbarMessage("Usuário cadastrado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setTimeout(() => router.push("/user/login"), 2000);
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      setSnackbarMessage("Erro ao cadastrar o usuário.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: -30,
          width: "100%",
        }}
      >
        <LoginPrompt />
      </Box>
    </Box>
  );
}
