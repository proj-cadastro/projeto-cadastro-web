import React from "react";
import { TextField, Box } from "@mui/material";

interface TextFilterProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export default function TextFilter({ value, onChange, label }: TextFilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box>
      <TextField
        fullWidth
        label={label}
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}
