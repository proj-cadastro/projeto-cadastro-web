import { Box } from "@mui/material";
import BodyText from "../atoms/BodyText";
import StyledLink from "../atoms/StyledLink";

export default function RegisterPrompt() {
  return (
    <Box
      sx={{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <BodyText text="Ainda não possui uma conta?" />
      <StyledLink text="Cadastre-se aqui!" href="/register" />
    </Box>
  );
}
