import { TableRow, TableCell, TableHead } from "@mui/material";

interface TableHeaderProps {
  visibleColumns: string[];
}

const allColumns = {
  nome: "Nome",
  email: "E-mail",
  titulacao: "Titulação",
  numeroMatricula: "N° Matrícula",
  unidadeID: "Unidade",
  lattes: "Lattes",
  referencia: "Referência",
  observacoes: "Observações",
  statusAtividade: "Status",
  cursos: "Cursos",
  acoes: "Ações",
};

export default function TableHeader({ visibleColumns }: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {Object.entries(allColumns).map(
          ([key, label]) =>
            visibleColumns.includes(key) && (
              <TableCell key={key} sx={{ minWidth: "150px" }}>
                {label}
              </TableCell>
            )
        )}
      </TableRow>
    </TableHead>
  );
}
