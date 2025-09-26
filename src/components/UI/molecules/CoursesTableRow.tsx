import React from "react";
import { TableRow, TableCell, Button, Box } from "@mui/material";
import { ICourse } from "@/interfaces/ICourses";
import Link from "next/link";
import CourseResponseDTO from "@/dto/CourseResponseDTO";


interface CourseTableRowProps {
  data: CourseResponseDTO
  visibleColumns: string[];
  onDelete: (courseId: number) => void
  //professorMap: Record<string, string>
}

export default function CourseTableRowProps({
  data,
  visibleColumns,
  onDelete,
  //professorMap
}: CourseTableRowProps) {

  return (
    <TableRow>
      {visibleColumns.includes("name") && <TableCell>{data.getNome()}</TableCell>}
      {visibleColumns.includes("name") && <TableCell>{data.getCodigo()}</TableCell>}
      {visibleColumns.includes("name") && <TableCell>{data.getModelo()}</TableCell>}
      {visibleColumns.includes("name") && <TableCell>{data.getCoordenadorId()}</TableCell>}
      {visibleColumns.includes("actions") && (
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              component={Link}
              href={`/course/editCourses/${data.id}`}
            >
              Editar
            </Button>

            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => onDelete(data.id)}
            >
              Excluir
            </Button>
          </Box>
        </TableCell>
      )}

    </TableRow>

  )
}


