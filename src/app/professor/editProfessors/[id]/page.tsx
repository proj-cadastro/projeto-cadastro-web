"use client";

import React, { useEffect, useState } from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import { IProfessor } from "@/interfaces/IProfessors";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import { professorFields } from "@/components/UI/atoms/ProfessorFields";
import { ProfessorService } from "@/service/Service";
import useCourses from "../../../../service/UtilitarioCursoService";
import { Box, CircularProgress, Container } from "@mui/material";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";

export default function EditProfessors({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string | null>(null); // Estado para armazenar o id
  const [professor, setProfessor] = useState<IProfessor | null>(null); // Estado para armazenar os dados do professor
  const { courses } = useCourses();

  // Desembrulhando a Promise
  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    fetchParams();
  }, [params]);

  // Buscar os dados do professor assim que o id for definido
  useEffect(() => {
    if (id) {
      const fetchProfessor = async () => {
        try {
          const response = await ProfessorService.buscarPorId(id); // Chamada à API
          const professorData = response.data; // Acessa os dados da resposta
          setProfessor(professorData); // Atribui os dados ao estado
        } catch (error) {
          console.error("Erro ao buscar os dados do professor:", error);
        }
      };

      fetchProfessor();
    }
  }, [id]);

  // Função de envio de dados para o backend
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const putProfessor = (data: Record<string, any>) => {
    if (id) ProfessorService.atualizar(id, data);
    console.log("Dados enviados:", data);
  };

  const retornaProfessor = () => {
    return professor || {};
  };

  const updatedFields = professorFields.map((field) => {
    if (field.id === "coursesId") {
      return {
        ...field,
        options: courses, // Passando os cursos carregados
      };
    }
    return field;
  });

  if (!professor) {
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
          <TitleRegister
            text="Edição de Professores"
            subText="Fatec Votorantim"
          />
        }
        fields={updatedFields}
        onSubmit={putProfessor} // Passa a função putProfessor para o onSubmit
        initialValues={retornaProfessor()} // Passa os dados do professor para o formulário
      />
      <Footer />
    </Box>
  );
}
