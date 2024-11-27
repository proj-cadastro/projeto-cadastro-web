import { Box } from "@mui/material";
import BodyText from "../atoms/BodyText";
import PrimaryButton from "../atoms/PrimaryButton";

export default function LoginPrompt() {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <BodyText text="Já possui uma conta?" />
      <PrimaryButton text="Entrar" href="/user/login" />
    </Box>
  );
}
