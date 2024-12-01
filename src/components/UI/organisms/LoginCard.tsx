import { Box, Container } from "@mui/material";
import LogoImage from "../atoms/Logo"; // Ajuste o caminho se necessário
import LoginForm from "../molecules/LoginForm"; // Ajuste o caminho se necessário
import RegisterPrompt from "../molecules/RegisterPrompt"; // Ajuste o caminho se necessário

interface LoginCardProps {
  onLogin: (credentials: { email: string; password: string }) => Promise<void>;
  error: string;
}

export default function LoginCard({ onLogin, error }: LoginCardProps) {
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
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <LogoImage />
        </Box>
        <Box sx={{ mb: 2 }}>
          <LoginForm onLogin={onLogin} error={error} /> {/* Passa o onLogin e error para LoginForm */}
        </Box>
        <Box>
          <RegisterPrompt />
        </Box>
      </Box>
    </Container>
  );
}
