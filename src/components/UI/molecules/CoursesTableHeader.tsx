import React from "react";
import { TableRow, TableCell, TableHead } from "@mui/material";

interface CourseTableHeaderProps {
  visibleColumns: string[];
  COLUMN_LABELS: Record<string, string>;
}

export default function CourseTableHeader({
  visibleColumns,
  COLUMN_LABELS,
}: CourseTableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {visibleColumns.map((column) => (
          <TableCell sx={{ minWidth: "150px" }} key={column}>
            {COLUMN_LABELS[column]}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
