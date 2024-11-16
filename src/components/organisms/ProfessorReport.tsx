import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import DataTableRow from "../molecules/TableRow";
import TableHeader from "../molecules/TableHeader";

interface ProfessorTableProps {
  professors: Array<{
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
  }>;
}

export default function ProfessorTable({ professors }: ProfessorTableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%", 
        maxWidth: 1400, 
        margin: "0 auto",
        borderRadius: 2,
        boxShadow: 3,
        mt: 4,
        overflowX: "auto", 
      }}
    >
      <Table>
        <TableHeader />
        <TableBody>
          {professors.map((professor, index) => (
            <DataTableRow
              key={index}
              nome={professor.nome}
              email={professor.email}
              titulacao={professor.titulacao}
              numeroMatricula={professor.numeroMatricula}
              unidadeID={professor.unidadeID}
              lattes={professor.lattes}
              referencia={professor.referencia}
              observacoes={professor.observacoes}
              statusAtividade={professor.statusAtividade}
              cursos={professor.cursos}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}