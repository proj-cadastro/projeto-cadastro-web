import { TextField } from "@mui/material";

interface InputCountProps {
  id: string;
  label: string;
  type?: string;
  autoFocus?: boolean;
  placeholder?: string;
}

export default function InputCount({ id, label, type = "text", autoFocus = false, placeholder }: InputCountProps) {
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
      placeholder={placeholder}
      inputProps={{
        min: 0,
        max: 100,
        step: 1,
      }}
    />
  );
}
