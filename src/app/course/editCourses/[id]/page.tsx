"use client";

import React, { useEffect, useState } from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import { ICourse } from "@/interfaces/ICourses";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import { courseFields } from "@/components/UI/atoms/CourseFields";
import { CourseService } from "@/service/Service";
import useCourses from "@/context/UtilitarioCursoService";
import { Box, CircularProgress, Container } from "@mui/material";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import useProfessors from "@/context/UtilitarioProfessorService";

export default function EditCourses({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string | null>(null); // Estado para armazenar o ID
  const [course, setCourse] = useState<ICourse | null>(null); // Estado para armazenar os dados do curso
  const { coursesData } = useCourses();
  const {professors} = useProfessors()

  // Desembrulhando a Promise
  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    fetchParams();
  }, [params]);

  // Buscar os dados do curso assim que o ID for definido
  useEffect(() => {
    if (id) {
      const fetchCourse = async () => {
        try {
          const response = await CourseService.buscarPorId(id); // Chamada à API
          const courseData = response.data; // Acessa os dados da resposta
          setCourse(courseData); // Atribui os dados ao estado
        } catch (error) {
          console.error("Erro ao buscar os dados do curso:", error);
        }
      };

      fetchCourse();
    }
  }, [id]);

  // Função de envio de dados para o backend
  const putCourse = (data: Record<string, any>) => {
    if (id) CourseService.atualizar(id, data);
    console.log("Dados enviados:", data);
  };

  const retornaCourse = () => {
    return course || {};
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
        onSubmit={putCourse} // Passa a função putCourse para o onSubmit
        initialValues={retornaCourse()} // Passa os dados do curso para o formulário
      />
      <Footer />
    </Box>
  );
}
