/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Footer from "@/components/UI/organisms/Footer";
import { Box, Card, Container } from "@mui/material";
import Chart from "@/components/UI/molecules/Chart";
import Navbar from "@/components/UI/organisms/Navbar";
import auth from "../../components/HOCS/auth";
import useProfessorsWithSpecialties from "../../context/UtilitarioProfessorService";

const Home = () => {
  const { specialties } = useProfessorsWithSpecialties();

  const chartData = {
    labels: specialties.map((item: { specialty: any }) => item.specialty),
    datasets: [
      {
        label: "Especialidades de Professores",
        data: specialties.map((item: { count: any }) => item.count),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <Navbar />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          padding: 2,
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 800,
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Chart
            title="Distribuição de Professores"
            data={chartData}
            options={chartOptions}
          />
        </Card>
      </Box>

      <Footer />
    </Container>
  );
};

export default auth(Home);
