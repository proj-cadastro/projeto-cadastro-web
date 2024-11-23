"use client";
import Footer from "@/components/organisms/Footer";
import { Box, Card, Container, Grid2 } from "@mui/material";
import Chart from "@/components/molecules/Chart";
import { data, options } from "../../utils/mockChart";
import Navbar from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <Container>
      <Box sx={{ paddingTop: 12 }}>
        <Navbar />
      </Box>

      <Grid2
        container
        spacing={4}
        justifyContent="center"
      >
        <Grid2 size={8}>
          <Card>
            <Chart
              title="Distribuição de Professores"
              data={data}
              options={options}
            />
          </Card>
        </Grid2>
      </Grid2>
      <Box>
        <Footer />
      </Box>
    </Container>
  );
}
