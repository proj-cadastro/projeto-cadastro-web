import { Button } from "@mui/material";

interface LogoutButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

export default function LogoutButton({
  text,
  href,
  onClick,
}: LogoutButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      href={href}
      sx={{
        backgroundColor: "#FF0000",
        color: "#fff",
        size: "large",
        width: "100%",
        maxWidth: 20,
      }}
    >
      {text}
    </Button>
  );
}
