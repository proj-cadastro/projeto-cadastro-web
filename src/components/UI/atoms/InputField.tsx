import { TextField } from "@mui/material";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  autoFocus?: boolean;
  placeholder?: string;
  value: string; // Adicionando a prop value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Adicionando a prop onChange
}

export default function InputField({
  id,
  label,
  type = "text",
  autoFocus = false,
  placeholder,
  value, // Recebendo a prop value
  onChange, // Recebendo a prop onChange
}: InputFieldProps) {
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
      value={value} // Passando o value para o TextField
      onChange={onChange} // Passando o onChange para o TextField
    />
  );
}
