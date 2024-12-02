/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import { IProfessor } from "@/interfaces/IProfessors";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import { professorFields } from "@/components/UI/atoms/ProfessorFields";
import { ProfessorService } from "@/service/Service";
import useCourses from "../../../../context/UtilitarioCursoService";
import {
  Box,
  CircularProgress,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import { useRouter } from "next/navigation";

export default function EditProfessors({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string | null>(null);
  const [professor, setProfessor] = useState<IProfessor | null>(null);
  const { courses } = useCourses();
  const router = useRouter();

  // Estados para o Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  // Função para fechar o Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

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
          const response = await ProfessorService.buscarPorId(id);
          const professorData = response.data;
          setProfessor(professorData);
        } catch (error) {
          console.error("Erro ao buscar os dados do professor:", error);
        }
      };

      fetchProfessor();
    }
  }, [id]);

  // Função de envio de dados para o backend
  const putProfessor = async (data: Record<string, any>) => {
    if (!id) return;

    try {
      await ProfessorService.atualizar(id, data);
      setSnackbarMessage("Dados atualizados com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setTimeout(() => router.push("/professor/reportProfessors"), 2000);
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
      setSnackbarMessage("Erro ao atualizar os dados do professor.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const retornaProfessor = () => {
    return professor || {};
  };

  const updatedFields = professorFields.map((field) => {
    if (field.id === "coursesId") {
      return {
        ...field,
        options: courses,
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
        onSubmit={putProfessor}
        initialValues={retornaProfessor()}
      />
      <Footer />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Fecha após 6 segundos
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
