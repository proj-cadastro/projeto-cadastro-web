"use client";

import React, { useState } from "react";
import ProfessorTable from "@/components/organisms/ProfessorTable";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { Container, Box } from "@mui/material";
import { Professor } from "../../types/Professors";

const professorsData: Professor[] = [
  {
    id: "1",
    name: "Dr. João Silva",
    email: "joao.silva@fatecvotorantim.edu.br",
    titration: "Doutor",
    registrationNumber: "123456",
    unitId: "301 - Votorantim",
    lattes: "http://lattes.cnpq.br/123456789",
    reference: "PES I - A",
    notes: "Professor com experiência em TI.",
    activityStatus: "Ativo",
    courses: ["DSM", "CO"],
  },
  {
    id: "2",
    name: "Profa. Maria Souza",
    email: "maria.souza@fatecvotorantim.edu.br",
    titration: "Mestre",
    registrationNumber: "654321",
    unitId: "123 - Sorocaba",
    lattes: "http://lattes.cnpq.br/987654321",
    reference: "PES II - B",
    notes: "Professora com foco em redes.",
    activityStatus: "Ativo",
    courses: ["CO", "CDN"],
  },
];

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
          mt: 2,
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
