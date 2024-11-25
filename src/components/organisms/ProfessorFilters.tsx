import React from "react";
import { Box } from "@mui/material";
import TextFilter from "../molecules/TextFilter";
import CheckboxFilter from "../molecules/CheckboxFilter";
import ToggleFilter from "../molecules/ToggleFilter";
import { ProfessorFiltersProps } from "../../types/Filters";

export default function ProfessorFilters({
  filters,
  setFilters,
  availableCourses,
  availableTitulacoes,
}: ProfessorFiltersProps) {
  const handleSearchChange = (value: string) =>
    setFilters({ ...filters, search: value });

  const handleCoursesChange = (selected: string[]) =>
    setFilters({ ...filters, courses: selected });

  const handleTitulacoesChange = (selected: string[]) =>
    setFilters({ ...filters, titulacoes: selected });

  const handleStatusChange = (value: boolean) =>
    setFilters({ ...filters, status: value });

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: 2,
        borderRadius: 2,
        backgroundColor: "#fdfcfc",
      }}
    >
      <TextFilter
        value={filters.search}
        onChange={handleSearchChange}
        label="Buscar por Nome, Email ou Matrícula"
      />
      <CheckboxFilter
        options={availableCourses}
        selectedOptions={filters.courses}
        onChange={handleCoursesChange}
        label="Filtrar por Cursos"
      />
      <CheckboxFilter
        options={availableTitulacoes}
        selectedOptions={filters.titulacoes}
        onChange={handleTitulacoesChange}
        label="Filtrar por Titulação"
      />
      <ToggleFilter
        value={filters.status}
        onChange={handleStatusChange}
        label="Somente Ativos"
      />
    </Box>
  );
}
