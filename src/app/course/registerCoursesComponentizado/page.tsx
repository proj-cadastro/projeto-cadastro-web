"use client";

import React, { useState } from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import { courseFields } from "@/components/UI/atoms/CourseFields";
import { CourseService } from "@/service/Service";
import useProfessors from "@/context/UtilitarioProfessorService";
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

function RegisterCoursesComponentizado() {
  const { professors, loading } = useProfessors();
  const router = useRouter();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const updatedFields = courseFields.map((field) => {
    if (field.id === "professors" || field.id === "coordinator") {
      return {
        ...field,
        options: professors.map((option) => ({
          ...option,
        })),
      };
    }
    return field;
  });

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (data: Record<string, any>) => {
    try {
      console.log(JSON.stringify(data));
      await CourseService.criar(data);
      setSnackbarMessage("Curso cadastrado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setTimeout(() => router.push("/course/reportCourses"), 2000);
    } catch (error) {
      console.error("Erro ao cadastrar o curso:", error);
      setSnackbarMessage("Erro ao cadastrar o curso.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Navbar />
      <DynamicForm
        title={
          <TitleRegister text="Cadastro de Cursos" subText="Fatec Votorantim" />
        }
        fields={updatedFields}
        onSubmit={handleSubmit}
      />
      <Footer />
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

export default auth(RegisterCoursesComponentizado);
