import { Button } from "@mui/material";

interface RegisterButtonProps {
  text: string;
  href?: string;
}

export default function RegisterButton({ text, href }: RegisterButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      href={href}
      sx={{ width: "100%", maxWidth: 200 }}
    >
      {text}
    </Button>
  );
}