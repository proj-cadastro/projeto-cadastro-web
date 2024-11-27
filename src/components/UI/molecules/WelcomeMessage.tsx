import { Box } from "@mui/material";
import LogoImage from "../atoms/Logo";
import TitleText from "../atoms/TitleText";

export default function WelcomeMessage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <LogoImage />
      <TitleText text="Bem-vindo!" />
    </Box>
  );
}
