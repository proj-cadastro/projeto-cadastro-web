"use client";

import React, { useState } from "react";
import ProfessorTable from "@/components/UI/organisms/ProfessorTable";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import { Container, Box } from "@mui/material";
import { professorsData } from "../../../utils/mockProfessors"; // Atualize o caminho conforme necessário
//import { Professor } from "../../types/Professors";

const COLUMN_LABELS: Record<string, string> = {
  name: "Nome",
  email: "E-mail",
  titration: "Titulação",
  registrationNumber: "N° Matrícula",
  unitId: "Unidade",
  lattes: "Lattes",
  reference: "Referência",
  notes: "Observações",
  activityStatus: "Status",
  courses: "Cursos",
  actions: "Ações",
};

const COLUMN_OPTIONS = Object.keys(COLUMN_LABELS);

export default function ReportProfessors() {
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "name",
    "email",
    "lattes",
    "courses",
    "actions",
  ]);

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          mt: 4,
        }}
      >
        <ProfessorTable
          professors={professorsData}
          visibleColumns={visibleColumns}
          setVisibleColumns={setVisibleColumns}
          COLUMN_OPTIONS={COLUMN_OPTIONS}
          COLUMN_LABELS={COLUMN_LABELS}
        />
      </Box>
      <Box sx={{ mt: 12 }}>
        <Footer />
      </Box>
    </Container>
  );
}
