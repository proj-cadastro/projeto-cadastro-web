"use client";

import React from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import TitleRegister from "@/components/UI/atoms/TitleRegister";

import { courseFields } from "@/components/UI/atoms/CourseFields";
import { CourseService } from "@/service/Service";
import useProfessors from "@/service/UtilitarioProfessorService";
import { Box, CircularProgress, Container } from "@mui/material";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";

export default function RegisterCoursesComponentizado() {
  const { professors, loading } = useProfessors();

  const updatedFields = courseFields.map((field) => {
    if (field.id === "professors" || field.id === "coordinator") {
      return {
        ...field,
        options: professors.map((option) => ({
          ...option, // Inclui { value: professor, label: name, key: uniqueKey }
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
  return (
    <Box>
      <Navbar />
      <DynamicForm
        title={
          <TitleRegister text="Cadastro de Cursos" subText="Fatec Votorantim" />
        }
        fields={updatedFields}
        onSubmit={CourseService.criar}
      />
      <Footer />
    </Box>
  );
}
