import React from "react";
import { Box, TextField, Chip, Autocomplete } from "@mui/material";

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
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      <TextField
        label="Buscar"
        variant="outlined"
        size="small"
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
      />
      <Autocomplete
        multiple
        size="small"
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
          <TextField sx={{ width: "130px" }} {...params} label="Modelo" />
        )}
      />
    </Box>
  );
}
