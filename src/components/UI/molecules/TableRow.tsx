import { TableRow, TableCell, Button, Box } from "@mui/material";
import { IProfessor } from "@/interfaces/IProfessors";
import Link from "next/link";


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
      {visibleColumns.includes("lattes") && (
        <TableCell>{data.lattes}</TableCell>
      )}
      {visibleColumns.includes("courses") && (
        <TableCell>
          {data.coursesId.join(", ")}
          <p>
            cabeça de calango, consegui puxar os ids relacionados ao professor.
            Agora vc se vira pra buscar o objeto/pegarNome/atribuir na tablecell
          </p>
        </TableCell>
      )}

      {visibleColumns.includes("titration") && <TableCell>{data.titration}</TableCell>}
      {visibleColumns.includes("unitId") && <TableCell>{data.unitId}</TableCell>}
      {visibleColumns.includes("reference") && <TableCell>{data.reference}</TableCell>}
      {visibleColumns.includes("notes") && <TableCell>{data.notes}</TableCell>}
      {visibleColumns.includes("activityStatus") && <TableCell>{data.activityStatus}</TableCell>}

      {visibleColumns.includes("actions") && (
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>

            
            <Button 
            variant="outlined" 
            color="primary" 
            size="small"
            component = {Link}
            href={`/professor/editProfessors/${data._id}`}>
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
