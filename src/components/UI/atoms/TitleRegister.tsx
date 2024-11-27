import { Typography } from "@mui/material";

interface TitleRegisterProps {
  text: string;
  subText: string;
}

export default function TitleRegister({ text, subText }: TitleRegisterProps) {
  return (
    <Typography variant="h5" align="center" gutterBottom>
          {text} <br /> {subText}
    </Typography>
  );
}