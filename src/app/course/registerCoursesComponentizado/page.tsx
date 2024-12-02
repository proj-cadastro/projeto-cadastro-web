"use client";

import React from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import TitleRegister from "@/components/UI/atoms/TitleRegister";

import { courseFields } from "@/components/UI/atoms/CourseFields";
import { CourseService } from "@/service/Service";
import useProfessors from "@/context/UtilitarioProfessorService";
import { Box, CircularProgress, Container } from "@mui/material";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import auth from "@/components/HOCS/auth"; // Importando o HOC de autenticação

function RegisterCoursesComponentizado() {
  const { professors, loading } = useProfessors();

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

  const handleSubmit = async (data: Record<string, any>) => {

    try {
     console.log(JSON.stringify(data))
     await CourseService.criar(data)
    } catch (error) {
      
    }

  }




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
    </Box>
  );
}

export default auth(RegisterCoursesComponentizado);
