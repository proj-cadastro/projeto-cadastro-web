import { Typography } from "@mui/material";

interface TitleTextProps {
  text: string;
}

export default function TitleText({ text }: TitleTextProps) {
  return (
    <Typography variant="h4" component="h1" color="text.primary" fontWeight="bold">
      {text}
    </Typography>
  );
}
