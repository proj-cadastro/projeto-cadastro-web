import { TextField } from "@mui/material";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  autoFocus?: boolean;
}

export default function InputField({ id, label, type = "text", autoFocus = false }: InputFieldProps) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={id}
      type={type}
      autoFocus={autoFocus}
    />
  );
}
