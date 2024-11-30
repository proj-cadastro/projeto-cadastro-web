import { TableRow, TableCell, Button, Box } from "@mui/material";
import { IProfessor } from "@/interfaces/IProfessors";
import { ICourse } from "@/interfaces/ICourses";
import useCourses from "@/service/UtilitarioCursoService";
import { CourseService } from "@/service/Service";

interface DataTableRowProps {
  data: IProfessor;
  visibleColumns: string[];
  onDelete: (professorId: string) => void;
}

export default function DataTableRow({
  data,
  visibleColumns,
  onDelete,
}: DataTableRowProps) {



  return (
    <TableRow>
      {visibleColumns.includes("name") && <TableCell>{data.name}</TableCell>}
      {visibleColumns.includes("email") && <TableCell>{data.email}</TableCell>}
      {visibleColumns.includes("lattes") && <TableCell>{data.lattes}</TableCell>}

      {visibleColumns.includes("courses") && (
        
        <TableCell>
          {data.coursesId.join(", ")}
          <p>cabeça de calango, consegui puxar os ids relacionados ao professor. Agora vc se vira pra buscar o objeto/pegarNome/atribuir na tablecell</p>
        </TableCell>
      )}

      {visibleColumns.includes("actions") && (
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="outlined" color="primary" size="small">
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
