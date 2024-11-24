"use client";

import React, { useState } from "react";
import ProfessorTable from "@/components/organisms/ProfessorReport";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { Container, Box } from "@mui/material";

const professorsData = [
  {
    nome: "Dr. João Silva",
    email: "joao.silva@fatecvotorantim.edu.br",
    titulacao: "Doutor",
    numeroMatricula: "123456",
    unidadeID: "301 - Votorantim",
    lattes: "http://lattes.cnpq.br/123456789",
    referencia: "PES I - A",
    observacoes: "Professor com experiência em TI.",
    statusAtividade: "Ativo",
    cursos: ["DSM", "CO"],
  },
  {
    nome: "Profa. Maria Souza",
    email: "maria.souza@fatecvotorantim.edu.br",
    titulacao: "Mestre",
    numeroMatricula: "654321",
    unidadeID: "123 - Sorocaba",
    lattes: "http://lattes.cnpq.br/987654321",
    referencia: "PES II - B",
    observacoes: "Professora com foco em redes.",
    statusAtividade: "Ativo",
    cursos: ["CO", "CDN"],
  },
];

const COLUMN_LABELS: Record<string, string> = {
  nome: "Nome",
  email: "E-mail",
  titulacao: "Titulação",
  numeroMatricula: "N° Matrícula",
  unidadeID: "Unidade",
  lattes: "Lattes",
  referencia: "Referência",
  observacoes: "Observações",
  statusAtividade: "Status",
  cursos: "Cursos",
  acoes: "Ações",
};

const COLUMN_OPTIONS = Object.keys(COLUMN_LABELS);

export default function ReportProfessors() {
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "nome",
    "email",
    "lattes",
    "cursos",
    "acoes",
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
