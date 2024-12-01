import { Button } from "@mui/material";

interface PrimaryButtonProps {
  text: string;
  href?: string;
  type?: "button" | "submit" | "reset"; // Adicionando a prop type
}

export default function PrimaryButton({ text, href, type = "button" }: PrimaryButtonProps) {
  return (
    <Button
      type={type} // Passando a prop type para o Button
      variant="contained"
      color="primary"
      href={href}
      fullWidth
    >
      {text}
    </Button>
  );
}
