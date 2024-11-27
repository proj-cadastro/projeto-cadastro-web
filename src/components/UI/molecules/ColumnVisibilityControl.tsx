import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Box,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface ColumnVisibilityControlProps {
  visibleColumns: string[];
  setVisibleColumns: (columns: string[]) => void;
  COLUMN_OPTIONS: string[];
  COLUMN_LABELS: Record<string, string>;
}

export default function ColumnVisibilityControl({
  visibleColumns,
  setVisibleColumns,
  COLUMN_OPTIONS,
  COLUMN_LABELS,
}: ColumnVisibilityControlProps) {
  const handleColumnChange = (event: SelectChangeEvent<string[]>) => {
    const selectedValues = event.target.value as string[];
    setVisibleColumns(selectedValues);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mt: 2,
        width: "100%",
      }}
    >
      <FormControl sx={{ width: 300 }}>
        <InputLabel>Colunas Visíveis</InputLabel>
        <Select
          label="Colunas Visíveis"
          multiple
          value={visibleColumns}
          onChange={handleColumnChange}
          renderValue={(selected) =>
            (selected as string[]).map((key) => COLUMN_LABELS[key]).join(", ")
          }
        >
          {COLUMN_OPTIONS.map((key) => (
            <MenuItem key={key} value={key}>
              <Checkbox checked={visibleColumns.includes(key)} />
              <ListItemText primary={COLUMN_LABELS[key]} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
