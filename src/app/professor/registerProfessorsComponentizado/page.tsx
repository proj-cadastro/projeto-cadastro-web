"use client";

import React from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import TitleRegister from "@/components/UI/atoms/TitleRegister";

import { professorFields } from "@/components/UI/atoms/ProfessorFields";
import { ProfessorService } from "@/service/Service";
import useCourses from "@/service/UtilitarioCursoService";
import { Box, CircularProgress, Container } from "@mui/material";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";

export default function RegisterProfessorsComponentizado() {
  const { courses, loading } = useCourses();

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
        options: courses, // Passando os cursos carregados
      };
    }
    return field;
  });

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
        onSubmit={ProfessorService.criar}
      />
      <Footer />
    </Box>
  );
}
