import React from "react";
import { FormControlLabel, Switch, Box } from "@mui/material";

interface ToggleFilterProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
}

export default function ToggleFilter({
  value,
  onChange,
  label,
}: ToggleFilterProps) {
  const handleToggle = () => {
    onChange(!value);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={value} onChange={handleToggle} />}
        label={label}
      />
    </Box>
  );
}
