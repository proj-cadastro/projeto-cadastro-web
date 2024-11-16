"use client";
import Footer from "@/components/organisms/Footer";
import { Card, Container } from "@mui/material";
import Chart from "@/components/molecules/Chart";
import { data, options } from "../../utils/mockChart";
import Navbar from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <Container sx={{ pt: 8 }}>
      <Navbar/>
      <Card sx={{ mt: 8, mb: 5 }}></Card>
      <Card>
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
