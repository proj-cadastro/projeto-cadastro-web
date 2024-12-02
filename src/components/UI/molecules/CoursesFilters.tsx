import React from "react";
import { Box, TextField, Autocomplete, Chip } from "@mui/material";

interface CourseFiltersProps {
  filters: {
    search: string;
    models: string[];

  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      search: string;
      models: string[];

    }>
  >;
  availableModels: string[];

}

export default function CourseFilters({
  filters,
  setFilters,
  availableModels,
}: CourseFiltersProps) {

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


      {/* Campo de busca */}
      <TextField
        label="Buscar por Nome"
        variant="outlined"
        size="small"
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }


      />

      {/* Campo de coordenadores */}
      <Autocomplete
        multiple
        size="medium"
        options={availableModels}
        value={filters.models}
        onChange={(_e, value) =>
          setFilters((prev) => ({ ...prev, models: value }))
        }
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} key={option} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Modalidade" size="medium" />
        )}
      />


    </Box>
  );
}
