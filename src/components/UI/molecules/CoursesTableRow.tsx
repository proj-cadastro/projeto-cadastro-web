import React from "react";
import { TableRow, TableCell, Button, Box } from "@mui/material";
import { ICourse } from "@/interfaces/ICourses";
import Link from "next/link";


interface CourseTableRowProps {
  data: ICourse
  visibleColumns: string[];
  onDelete: (courseId: string) => void
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
      {visibleColumns.includes("name") && <TableCell>{data.name}</TableCell>}
      {visibleColumns.includes("name") && <TableCell>{data.codCourse}</TableCell>}
      {visibleColumns.includes("name") && <TableCell>{data.model}</TableCell>}
      {visibleColumns.includes("name") && <TableCell>{data.coordinator.name}</TableCell>}
      {visibleColumns.includes("actions") && (
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              component={Link}
              href={`/course/editCourses/${data._id}`}
            >
              Editar
            </Button>

            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => onDelete(data._id)}
            >
              Excluir
            </Button>
          </Box>
        </TableCell>
      )}

    </TableRow>

  )
}


