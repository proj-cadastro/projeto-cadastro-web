import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Button,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function App() {
  return (
    <Card
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Image
          alt="Logo Fatec Votorantim"
          src="/assets/logoFatecCapi.png"
          width={300}
          height={100}
          style={{ marginBottom: "1rem" }}
        />
        <Typography
          variant="h4"
          component="h1"
          color="text.primary"
          fontWeight="bold"
        >
          Bem-vindo!
        </Typography>
      </CardContent>
      <Divider />
      <CardContent
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Já possui uma conta?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/login"
          sx={{ width: "100%", maxWidth: 300 }}
        >
          Entrar
        </Button>
      </CardContent>
      <Divider />
      <CardActions
        sx={{ textAlign: "center", flexDirection: "column", gap: 1 }}
      >
        <Typography variant="body1" color="text.secondary">
          Ainda não possui uma conta?
        </Typography>
        <Link href="/register" color="primary" underline="hover">
          Cadastre-se aqui!
        </Link>
      </CardActions>
    </Card>
  );
}
