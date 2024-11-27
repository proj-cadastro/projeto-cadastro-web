import { Typography } from "@mui/material";

interface LabelTextProps {
  text: string;
}

export default function LabelText({ text }: LabelTextProps) {
  return (
    <Typography variant="subtitle1" color="text.primary">
      {text}
    </Typography>
  );
}
