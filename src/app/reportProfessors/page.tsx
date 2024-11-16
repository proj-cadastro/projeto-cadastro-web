// src/pages/ReportProfessors.tsx
import ProfessorTable from "@/components/organisms/ProfessorReport";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { Container, Box } from "@mui/material";

const professorsData = [
  {
    nome: "Dr. João Silva",
    email: "joao.silva@fatecvotorantim.edu.br",
    titulacao: "Doutor",
    numeroMatricula: "123456",
    unidadeID: "301 - Votorantim",
    lattes: "http://lattes.cnpq.br/123456789",
    referencia: "PES I - A",
    observacoes: "Professor com experiência em TI.",
    statusAtividade: "Ativo",
    cursos: ["DSM", "CO"],
  },
  {
    nome: "Profa. Maria Souza",
    email: "maria.souza@fatecvotorantim.edu.br",
    titulacao: "Mestre",
    numeroMatricula: "654321",
    unidadeID: "123 - Sorocaba",
    lattes: "http://lattes.cnpq.br/987654321",
    referencia: "PES II - B",
    observacoes: "Professora com foco em redes.",
    statusAtividade: "Ativo",
    cursos: ["CO", "CDN"],
  },
];

export default function ReportProfessors() {
  return (
    <Container sx={{ pt: 8, height: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",  
          flexDirection: "column",
          width: "100%",
          minHeight: "80vh",          
        }}
      >
        <ProfessorTable professors={professorsData} />
      </Box>
      <Footer />
    </Container>
  );
}
