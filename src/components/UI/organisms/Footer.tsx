import { Box } from "@mui/material";
import BodyText from "../atoms/BodyText";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#fff",
        color: "#fff",
        py: 2,
        textAlign: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <BodyText text="Fatec Votorantim" />
        <BodyText text={`© ${currentYear} Todos os direitos reservados`} />
      </Box>
    </Box>
  );
}
