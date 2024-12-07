/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import { ICourse } from "@/interfaces/ICourses";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import { courseFields } from "@/components/UI/atoms/CourseFields";
import { CourseService } from "@/service/Service";
import {
  Box,
  CircularProgress,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import useProfessors from "@/context/UtilitarioProfessorService";
import { useRouter } from "next/navigation";
import auth from "@/components/HOCS/auth";

function EditCourses({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);
  const [course, setCourse] = useState<ICourse | null>(null);
  const { professors } = useProfessors();
  const router = useRouter();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchCourse = async () => {
        try {
          const response = await CourseService.buscarPorId(id);
          const courseData = response.data;
          setCourse(courseData);
        } catch (error) {
          console.error("Erro ao buscar os dados do curso:", error);
        }
      };

      fetchCourse();
    }
  }, [id]);

  const putCourse = async (data: Record<string, any>) => {
    if (id) {
      try {
        await CourseService.atualizar(id, data);
        setSnackbarMessage("Curso atualizado com sucesso!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setTimeout(() => router.push("/course/reportCourses"), 2000);
      } catch (error) {
        console.error("Erro ao atualizar o curso:", error);
        setSnackbarMessage("Erro ao atualizar o curso.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  const updatedFields = courseFields.map((field) => {
    if (field.id === "professors" || field.id === "coordinator") {
      return {
        ...field,
        options: professors,
      };
    }
    return field;
  });

  if (!course) {
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
          <TitleRegister text="Edição de Cursos" subText="Fatec Votorantim" />
        }
        fields={updatedFields}
        onSubmit={putCourse}
        initialValues={course}
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

export default auth(EditCourses); // Exportando o componente encapsulado no HOC de autenticação
