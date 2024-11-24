import { TableRow, TableCell, Button, Box} from "@mui/material";
import BodyText from "../atoms/BodyText";

interface DataTableRowProps {
  data: {
    nome: string;
    email: string;
    titulacao: string;
    numeroMatricula: string;
    unidadeID: string;
    lattes: string;
    referencia: string;
    observacoes: string;
    statusAtividade: string;
    cursos: string[];
  };
  visibleColumns: string[];
}

export default function DataTableRow({
  data,
  visibleColumns,
}: DataTableRowProps) {
  const allColumns = {
    nome: <BodyText text={data.nome} />,
    email: <BodyText text={data.email} />,
    titulacao: <BodyText text={data.titulacao} />,
    numeroMatricula: <BodyText text={data.numeroMatricula} />,
    unidadeID: <BodyText text={data.unidadeID} />,
    lattes: <BodyText text={data.lattes} />,
    referencia: <BodyText text={data.referencia} />,
    observacoes: <BodyText text={data.observacoes} />,
    statusAtividade: <BodyText text={data.statusAtividade} />,
    cursos: <BodyText text={data.cursos.join(", ")} />,
    acoes: (
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button variant="outlined" color="primary" size="small">
          Editar
        </Button>
        <Button variant="outlined" color="error" size="small">
          Excluir
        </Button>
      </Box>
    ),
  };

  return (
    <TableRow>
      {Object.entries(allColumns).map(
        ([key, content]) =>
          visibleColumns.includes(key) && (
            <TableCell key={key} sx={{ minWidth: "150px" }}>
              {content}
            </TableCell>
          )
      )}
    </TableRow>
  );
}
