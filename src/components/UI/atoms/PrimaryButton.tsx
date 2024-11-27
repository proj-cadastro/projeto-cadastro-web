import { Button } from "@mui/material";

interface PrimaryButtonProps {
  text: string;
  href: string;
}

export default function PrimaryButton({ text, href }: PrimaryButtonProps) {
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
