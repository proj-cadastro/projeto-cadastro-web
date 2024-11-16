import { TableRow, TableCell, TableHead } from "@mui/material";

export default function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ minWidth: "180px" }}>Nome</TableCell>
        <TableCell sx={{ width: "20%" }}>E-mail</TableCell>
        <TableCell sx={{ width: "15%" }}>Titulação</TableCell>
        <TableCell sx={{ width: "15%" }}>N° Matrícula</TableCell>
        <TableCell sx={{ width: "15%" }}>Unidade</TableCell>
        <TableCell sx={{ width: "20%" }}>Lattes</TableCell>
        <TableCell sx={{ width: "15%" }}>Referência</TableCell>
        <TableCell sx={{ width: "20%" }}>Observações</TableCell>
        <TableCell sx={{ width: "10%" }}>Status</TableCell>
        <TableCell sx={{ width: "15%" }}>Cursos</TableCell>
        <TableCell sx={{ width: "10%" }}>Ações</TableCell>
      </TableRow>
    </TableHead>
  );
}