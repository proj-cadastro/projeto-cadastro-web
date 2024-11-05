"use client";


import { Box, Button, Container, TextField, Link } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 4,
          boxShadow: 3,
          padding: 4,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Box
          sx={{
            mb: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/logoFatecCapi.png"
            alt="Logo"
            width={200}
            height={100}
          />
        </Box>

        <Box sx={{ mt: 1, width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="Usuário"
            name="user"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#7D8995" }}
            onClick={() => {
              router.push("/home");
            }}
          >
            Entrar
          </Button>
        </Box>
        <p>
          Ainda não possui cadastro,{" "}
          <Link href="/register">cadastre-se aqui</Link>
        </p>
      </Box>
    </Container>
  );
}
