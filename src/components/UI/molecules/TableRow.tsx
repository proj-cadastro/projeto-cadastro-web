import { TableRow, TableCell, Button, Box } from "@mui/material";
import { IProfessor } from "@/interfaces/IProfessors";
import Link from "next/link";

interface DataTableRowProps {
  data: IProfessor;
  visibleColumns: string[];
  onDelete: (professorId: string) => void;
  courseMap: Record<string, string>;
}

export default function DataTableRow({
  data,
  visibleColumns,
  onDelete,
  courseMap,
}: DataTableRowProps) {
  return (
    <TableRow>
      {visibleColumns.includes("name") && <TableCell>{data.name}</TableCell>}
      {visibleColumns.includes("email") && <TableCell>{data.email}</TableCell>}
      {visibleColumns.includes("lattes") && (
        <TableCell>{data.lattes}</TableCell>
      )}
      {visibleColumns.includes("courses") && (
        <TableCell>
          {data.coursesId
            .map((courseId) => courseMap[courseId] || "Desconhecido")
            .join(", ")}
        </TableCell>
      )}
      {visibleColumns.includes("titration") && (
        <TableCell>{data.titration}</TableCell>
      )}
      {visibleColumns.includes("unitId") && (
        <TableCell>{data.unitId}</TableCell>
      )}
      {visibleColumns.includes("reference") && (
        <TableCell>{data.reference}</TableCell>
      )}
      {visibleColumns.includes("notes") && <TableCell>{data.notes}</TableCell>}
      {visibleColumns.includes("activityStatus") && (
        <TableCell>{data.activityStatus}</TableCell>
      )}

      {visibleColumns.includes("actions") && (
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              component={Link}
              href={`/professor/editProfessors/${data._id}`}
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
  );
}
