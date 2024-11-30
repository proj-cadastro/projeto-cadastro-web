import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  Pagination,
} from "@mui/material";
import DataTableRow from "../molecules/TableRow";
import TableHeader from "../molecules/TableHeader";
import ColumnVisibilityControl from "../molecules/ColumnVisibilityControl";
import ProfessorFilters from "./ProfessorFilters";
import { ProfessorService } from "@/service/Service";
import useProfessors from "@/service/UtilitarioProfessorService";

interface ProfessorTableProps {
  visibleColumns: string[];
  setVisibleColumns: (columns: string[]) => void;
  COLUMN_OPTIONS: string[];
  COLUMN_LABELS: Record<string, string>;
}

export default function ProfessorTable({
  visibleColumns,
  setVisibleColumns,
  COLUMN_OPTIONS,
  COLUMN_LABELS,
}: ProfessorTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [filters, setFilters] = useState<{
    search: string;
    courses: string[];
    titulacoes: string[];
    status: string;
  }>({
    search: "",
    courses: [],
    titulacoes: [],
    status: "",
  });

  const {professors, setProfessors} = useProfessors();

  const filteredProfessors = professors.filter((professor) => {
    console.log("Professor atual:", professor); 

    const profValue = professor.value;

    const matchesSearch =
      profValue.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      profValue.email.toLowerCase().includes(filters.search.toLowerCase());
    console.log("Matches Search:", matchesSearch);

    const matchesCourses =
      filters.courses.length === 0 ||
      filters.courses.some((course) => profValue.courses.includes(course));
    console.log("Matches Courses:", matchesCourses);

    const matchesTitration =
      filters.titulacoes.length === 0 ||
      filters.titulacoes.includes(profValue.titration);
    console.log("Matches Titration:", matchesTitration);

    const matchesStatus =
      filters.status === "" || profValue.activityStatus === filters.status;

    console.log("Matches Status:", matchesStatus); 

    return matchesSearch && matchesCourses && matchesTitration && matchesStatus;
  });

  console.log("Professores filtrados", filteredProfessors.length);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentPageItems = filteredProfessors.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleColumnVisibilityChange = (selectedColumns: string[]) => {
    const updatedColumns = [
      ...selectedColumns.filter((col) => col !== "actions"),
      "actions",
    ];
    setVisibleColumns(updatedColumns);
  };

  const handleDeleteProfessor = async (professorId: string) => {
    try {
      await ProfessorService.deletar(professorId);
  
      // Após a exclusão no backend, atualize a lista localmente
      const updatedProfessorList = professors.filter(
        (professor) => professor.value._id !== professorId
      );
      setProfessors(updatedProfessorList); 
    } catch (error) {
      console.error("Erro ao excluir professor:", error);
      // Aqui você pode adicionar um feedback visual, como uma mensagem de erro
    }
  };
  


  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "90%",
        margin: "0 auto",
        borderRadius: 2,
        mt: 12,
        overflowX: "auto",
        pb: 12,
      }}
    >
      <ProfessorFilters
        filters={filters}
        setFilters={setFilters}
        availableCourses={["DSM", "CO", "CDN"]}
        availableTitulacoes={["Doutor", "Mestre"]}
      />

      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          margin: "0 auto",
          borderRadius: 2,
          boxShadow: 3,
          mt: 2,
          overflowX: "auto",
        }}
      >
        <Table>
          <TableHeader visibleColumns={visibleColumns} />
          <TableBody>
            {currentPageItems.map((professor) => (
              <DataTableRow
                key={professor.value._id} 
                data={professor.value}
                visibleColumns={visibleColumns}
                onDelete = {handleDeleteProfessor}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(filteredProfessors.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
      <ColumnVisibilityControl
        visibleColumns={visibleColumns}
        setVisibleColumns={handleColumnVisibilityChange}
        COLUMN_OPTIONS={COLUMN_OPTIONS}
        COLUMN_LABELS={COLUMN_LABELS}
      />
    </Box>
  );
}
