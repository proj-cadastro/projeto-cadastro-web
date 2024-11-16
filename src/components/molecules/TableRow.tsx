import { TableRow, TableCell, Button } from "@mui/material";
import BodyText from "../atoms/BodyText";

interface DataTableRowProps {
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
}

export default function DataTableRow({
  nome,
  email,
  titulacao,
  numeroMatricula,
  unidadeID,
  lattes,
  referencia,
  observacoes,
  statusAtividade,
  cursos,
}: DataTableRowProps) {
  return (
    <TableRow>
      <TableCell sx={{ minWidth: "180px" }}><BodyText text={nome} /></TableCell>
      <TableCell sx={{ width: "15%" }}><BodyText text={email} /></TableCell>
      <TableCell sx={{ width: "15%" }}><BodyText text={titulacao} /></TableCell>
      <TableCell sx={{ width: "15%" }}><BodyText text={numeroMatricula} /></TableCell>
      <TableCell sx={{ width: "15%" }}><BodyText text={unidadeID} /></TableCell>
      <TableCell sx={{ width: "20%" }}><BodyText text={lattes} /></TableCell>
      <TableCell sx={{ width: "15%" }}><BodyText text={referencia} /></TableCell>
      <TableCell sx={{ width: "20%" }}><BodyText text={observacoes} /></TableCell>
      <TableCell sx={{ width: "10%" }}><BodyText text={statusAtividade} /></TableCell>
      <TableCell sx={{ width: "15%" }}><BodyText text={cursos.join(", ")} /></TableCell>
      <TableCell sx={{ width: "10%" }}>
        <Button variant="outlined" color="primary" size="small">
          Editar
        </Button>
      </TableCell>
    </TableRow>
  );
}