"use client";
import Footer from "@/components/UI/organisms/Footer";
import { Box, Card, Container } from "@mui/material";
import Chart from "@/components/UI/molecules/Chart";
import { data, options } from "../../utils/mockChart";
import Navbar from "@/components/UI/organisms/Navbar";
import auth from "../../components/HOCS/auth";

const Home = () => {
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
            data={data}
            options={options}
          />
        </Card>
      </Box>

      <Footer />
    </Container>
  );
};

export default auth(Home);
