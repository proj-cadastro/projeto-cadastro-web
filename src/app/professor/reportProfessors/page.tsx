"use client";

import React, { useState } from "react";
import ProfessorTable from "@/components/UI/organisms/ProfessorTable";
import Navbar from "@/components/UI/organisms/Navbar";
import Footer from "@/components/UI/organisms/Footer";
import { Container, Box, CircularProgress, Button } from "@mui/material";
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

  const handlePrint = () => {
    const printContent = document.getElementById("printable-area");

    const newWindow = window.open("", "_blank");
    const tableRows = Array.from(printContent!.getElementsByTagName("tr"));

    const printableTable = document.createElement("table");
    printableTable.style.width = "100%";
    printableTable.style.borderCollapse = "collapse";

    const headerRow = document.createElement("tr");
    visibleColumns.forEach((col) => {
      if (col !== "actions") {
        const th = document.createElement("th");
        th.textContent = COLUMN_LABELS[col];
        th.style.border = "1px solid black";
        th.style.padding = "4px";
        th.style.textAlign = "left";
        th.style.backgroundColor = "#f2f2f2";
        th.style.fontSize = "12px";
        headerRow.appendChild(th);
      }
    });
    printableTable.appendChild(headerRow);

    tableRows.forEach((row) => {
      const newRow = document.createElement("tr");
      const cells = Array.from(row.getElementsByTagName("td")).filter(
        (cell, index) =>
          visibleColumns.includes(COLUMN_OPTIONS[index]) &&
          COLUMN_OPTIONS[index] !== "actions"
      );

      cells.forEach((cell) => {
        const newCell = document.createElement("td");
        newCell.textContent = cell.textContent || "";
        newCell.style.border = "1px solid black";
        newCell.style.padding = "2px";
        newCell.style.fontSize = "12px";
        newRow.appendChild(newCell);
      });

      if (newRow.children.length > 0) {
        printableTable.appendChild(newRow);
      }
    });

    newWindow!.document.write(`
      <html>
        <head>
          <title>Imprimir Dados</title>
          <style>
            body { font-family: Arial, sans-serif; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid black; padding: 4px; text-align: left; font-size: 10px; } // Ajustes no tamanho da fonte e padding
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h2>Relatório de Professores</h2>
          <div>${printableTable.outerHTML}</div>
        </body>
      </html>
    `);
    newWindow!.document.close();
    newWindow!.focus();
    newWindow!.print();
    newWindow!.close();
  };

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
        <Box id="printable-area">
          <ProfessorTable
            visibleColumns={visibleColumns}
            setVisibleColumns={setVisibleColumns}
            COLUMN_OPTIONS={COLUMN_OPTIONS}
            COLUMN_LABELS={COLUMN_LABELS}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrint}
          sx={{ mb: 12 }}
        >
          Imprimir
        </Button>
      </Box>
      <Box sx={{ mt: 12 }}>
        <Footer />
      </Box>
    </Container>
  );
}

export default auth(ReportProfessors);
