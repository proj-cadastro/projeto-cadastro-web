"use client";

import React, { useState } from "react";
import ProfessorTable from "@/components/UI/organisms/ProfessorTable";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import { Container, Box, CircularProgress } from "@mui/material";
import useProfessors from "@/context/UtilitarioProfessorService";
import auth from "@/components/HOCS/auth";

const COLUMN_LABELS: Record<string, string> = {
  name: "Nome",
  email: "E-mail",
  titration: "Titulação",
  unitId: "Unidade",
  lattes: "Lattes",
  reference: "Referência",
  notes: "Observações",
  activityStatus: "Status",
  courses: "Cursos",
  actions: "Ações",
};

const COLUMN_OPTIONS = Object.keys(COLUMN_LABELS);

function ReportProfessors() {
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "name",
    "email",
    "lattes",
    "courses",
    "actions",
  ]);

  const { loading, error } = useProfessors();

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

  if (error) {
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
        <div>{error}</div>
      </Container>
    );
  }

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

export default auth(ReportProfessors);
