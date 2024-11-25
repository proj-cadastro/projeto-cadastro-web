import { TableRow, TableCell, TableHead } from "@mui/material";

interface TableHeaderProps {
  visibleColumns: string[];
}

const allColumns: Record<string, string> = {
  name: "Nome",
  email: "E-mail",
  titration: "Titulação",
  registrationNumber: "N° Matrícula",
  unitId: "Unidade",
  lattes: "Lattes",
  reference: "Referência",
  notes: "Observações",
  activityStatus: "Status",
  courses: "Cursos",
  actions: "Ações",
};

export default function TableHeader({ visibleColumns }: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {visibleColumns.map((column) => (
          <TableCell key={column} sx={{ minWidth: "150px" }}>
            {allColumns[column as keyof typeof allColumns]}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
