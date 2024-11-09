"use client";
import Footer from "@/components/organisms/Footer";
import { Card, Container } from "@mui/material";
import Chart from "@/components/molecules/Chart";
import { data, options } from "../../utils/mockChart";

export default function Home() {
  return (
    <Container>
      {/* navbar */}
      <Card sx={{ mt: 8, mb: 5 }}></Card>
      <Card sx={{ padding: 2, top: 4 }}>
        <Chart
          title="Distribuição de Professores"
          data={data}
          options={options}
        />
      </Card>
      <Footer />
    </Container>
  );
}
