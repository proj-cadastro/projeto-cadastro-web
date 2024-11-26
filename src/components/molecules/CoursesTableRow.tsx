import React from "react";
import { TableCell } from "@mui/material";

interface CourseTableRowProps {
  data: Record<string, string>;
  visibleColumns: string[];
}

const CourseTableRow: React.FC<CourseTableRowProps> = ({
  data,
  visibleColumns,
}) => (
  <tr>
    {visibleColumns.map((column) => (
      <TableCell key={column}>{data[column] || "-"}</TableCell>
    ))}
  </tr>
);

export default CourseTableRow;
