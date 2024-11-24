// src/components/organisms/ProfessorReport.tsx
import React from "react";
import { Table, TableBody, TableContainer, Paper, Box } from "@mui/material";
import DataTableRow from "../molecules/TableRow";
import TableHeader from "../molecules/TableHeader";
import ColumnVisibilityControl from "../molecules/ColumnVisibilityControl";

interface ProfessorTableProps {
  professors: Array<{
    nome: string;
    email: string;
    titulacao: string;
    numeroMatricula: string;
    unidadeID: string;
    lattes: string;
    referencia: string;
    observacoes: string;
    statusAtividade: string;
    cursos: string[];
  }>;
  visibleColumns: string[];
  setVisibleColumns: (columns: string[]) => void;
  COLUMN_OPTIONS: string[];
  COLUMN_LABELS: Record<string, string>;
}

export default function ProfessorTable({
  professors,
  visibleColumns,
  setVisibleColumns,
  COLUMN_OPTIONS,
  COLUMN_LABELS,
}: ProfessorTableProps) {
  return (
    <Box>
      <ColumnVisibilityControl
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        COLUMN_OPTIONS={COLUMN_OPTIONS}
        COLUMN_LABELS={COLUMN_LABELS}
      />
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          borderRadius: 2,
          boxShadow: 3,
          mt: 4,
          overflowX: "auto",
        }}
      >
        <Table>
          <TableHeader visibleColumns={visibleColumns} />
          <TableBody>
            {professors.map((professor, index) => (
              <DataTableRow
                key={index}
                data={professor}
                visibleColumns={visibleColumns}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
