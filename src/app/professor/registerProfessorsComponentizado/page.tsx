/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import { professorFields } from "@/components/UI/atoms/ProfessorFields";
import { ProfessorService } from "@/service/Service";
import useCourses from "@/context/UtilitarioCursoService";
import {
  Box,
  CircularProgress,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import auth from "@/components/HOCS/auth";
import { useRouter } from "next/navigation";

function RegisterProfessorsComponentizado() {
  const { courses, loading } = useCourses();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const router = useRouter();

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (loading) {
    return (
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  const updatedFields = professorFields.map((field) => {
    if (field.id === "coursesId") {
      return {
        ...field,
        options: courses,
      };
    }
    return field;
  });

  const handleSubmit = async (data: Record<string, any>) => {
    try {
      await ProfessorService.criar(data);
      setSnackbarMessage("Professor cadastrado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setTimeout(() => router.push("/professor/reportProfessors"), 2000);
    } catch (error) {
      console.error("Erro ao cadastrar o professor:", error);
      setSnackbarMessage("Erro ao cadastrar o professor.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Navbar />
      <DynamicForm
        title={
          <TitleRegister
            text="Cadastro de Professor"
            subText="Fatec Votorantim"
          />
        }
        fields={updatedFields}
        onSubmit={handleSubmit}
      />
      <Footer />
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

export default auth(RegisterProfessorsComponentizado);
