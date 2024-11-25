import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";

interface CheckboxFilterProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  label: string;
}

export default function CheckboxFilter({
  options,
  selectedOptions,
  onChange,
  label,
}: CheckboxFilterProps) {
  const handleCheckboxChange = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    const updated = isSelected
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onChange(updated);
  };

  return (
    <Box>
      <p>{label}</p>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
