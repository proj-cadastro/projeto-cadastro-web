import { Box } from "@mui/material";
import BodyText from "../atoms/BodyText";
import StyledLink from "../atoms/StyledLink";

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
      <StyledLink text="cadastre-se" href="/register" />
    </Box>
  );
}
