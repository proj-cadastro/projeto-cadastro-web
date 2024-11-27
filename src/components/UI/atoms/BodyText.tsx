import { Typography } from "@mui/material";

interface BodyTextProps {
  text: string;
  color?: "text.primary" | "text.secondary";
}

export default function BodyText({ text, color = "text.secondary" }: BodyTextProps) {
  return (
    <Typography variant="body1" color={color}>
      {text}
    </Typography>
  );
}
