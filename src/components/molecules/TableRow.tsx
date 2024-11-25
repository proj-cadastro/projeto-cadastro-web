import { TableRow, TableCell, Button, Box } from "@mui/material";
import BodyText from "../atoms/BodyText";

interface DataTableRowProps {
  data: {
    name: string;
    email: string;
    titration: string;
    registrationNumber: string;
    unitId: string;
    lattes: string;
    reference: string;
    notes: string;
    activityStatus: string;
    courses: string[];
  };
  visibleColumns: string[];
}

export default function DataTableRow({
  data,
  visibleColumns,
}: DataTableRowProps) {
  const allColumns = {
    name: <BodyText text={data.name} />,
    email: <BodyText text={data.email} />,
    titration: <BodyText text={data.titration} />,
    registrationNumber: <BodyText text={data.registrationNumber} />,
    unitId: <BodyText text={data.unitId} />,
    lattes: <BodyText text={data.lattes} />,
    reference: <BodyText text={data.reference} />,
    notes: <BodyText text={data.notes} />,
    activityStatus: <BodyText text={data.activityStatus} />,
    courses: <BodyText text={data.courses.join(", ")} />,
    actions: (
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
      {visibleColumns.map((column) => (
        <TableCell key={column} sx={{ minWidth: "150px" }}>
          {allColumns[column as keyof typeof allColumns]} {/* Corrigindo o tipo */}
        </TableCell>
      ))}
    </TableRow>
  );
}
