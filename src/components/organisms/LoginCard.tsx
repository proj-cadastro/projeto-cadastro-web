import { Box, Container } from "@mui/material";
import LogoImage from "../atoms/Logo";
import LoginForm from "../molecules/LoginForm";
import LoginPrompt from "../molecules/LoginPrompt";

interface LoginCardProps {
  href: string;
}

export default function LoginCard({ href }: LoginCardProps) {
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
        <Box
          sx={{
            mb: 2,
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LogoImage />
        </Box>

        <LoginForm href={href} />
        <LoginPrompt />
      </Box>
    </Container>
  );
}
