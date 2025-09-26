/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Container,
  Grid,
  Card,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export interface FieldConfig {
  id: string;
  label: string;
  type: "text" | "number" | "select" | "textarea" | "checkbox" | "url";
  placeholder?: string;
  options?: Array<{ value: any; label: string }>;
  required?: boolean;
  transformValue?: (value: any) => any;
}

interface DynamicFormProps {
  title?: React.ReactNode;
  fields: FieldConfig[];
  onSubmit: (data: Record<string, any>) => void;
  initialValues?: Record<string, any>; // Dados iniciais para edição
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  title,
  fields,
  onSubmit,
  initialValues = {},
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Atualiza formData sempre que initialValues mudar
  useEffect(() => {
    if (initialValues) {
      // Se inicialValues tiver 'data', pega o objeto interno
      const values =
        "data" in initialValues ? initialValues.data : initialValues;

      const newFormData = fields.reduce<Record<string, any>>((acc, field) => {
        if (field.type === "checkbox") {
          acc[field.id] = values[field.id] || [];
        } else {
          acc[field.id] = values[field.id] ?? "";
        }
        return acc;
      }, {});
      setFormData(newFormData);
    }
  }, [initialValues, fields]);

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (
        field.required &&
        ["text", "textarea", "url"].includes(field.type) &&
        !formData[field.id]
      ) {
        newErrors[field.id] = `${field.label} é obrigatório`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const transformedData = fields.reduce<Record<string, any>>((acc, field) => {
      const rawValue = formData[field.id];
      acc[field.id] = field.transformValue
        ? field.transformValue(rawValue)
        : rawValue;
      return acc;
    }, {});

    setErrors({});
    onSubmit(transformedData);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Card
            sx={{
              width: "50vw",
              maxWidth: 1200,
              padding: 4,
              boxShadow: 3,
            }}
          >
            {title}

            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2.5}>
                {fields.map((field) => {
                  if (field.type === "checkbox") {
                    return (
                      <Grid item xs={12} key={field.id}>
                        <Stack
                          direction={{ xs: "column", md: "row" }}
                          spacing={2}
                        >
                          {field.options?.map((option) => (
                            <FormControlLabel
                              key={option.value._id || uuidv4()}
                              control={
                                <Checkbox
                                  id={option.value._id || uuidv4()}
                                  name={option.value._id || uuidv4()}
                                  checked={formData[field.id]?.includes(
                                    option.value
                                  )}
                                  onChange={() => {
                                    const newValues = [
                                      ...(formData[field.id] || []),
                                    ];
                                    if (newValues.includes(option.value)) {
                                      newValues.splice(
                                        newValues.indexOf(option.value),
                                        1
                                      );
                                    } else {
                                      newValues.push(option.value);
                                    }
                                    handleChange(field.id, newValues);
                                  }}
                                  value={option.value}
                                />
                              }
                              label={option.label}
                            />
                          ))}
                        </Stack>
                      </Grid>
                    );
                  }

                  return (
                    <Grid item xs={12} sm={12} md={4} key={field.id}>
                      <FormControl fullWidth required={field.required}>
                        {field.type === "select" ? (
                          <>
                            <InputLabel id={field.id}>{field.label}</InputLabel>
                            <Select
                              id={field.id}
                              name={field.id}
                              value={formData[field.id] || ""}
                              onChange={(e) =>
                                handleChange(field.id, e.target.value)
                              }
                              label={field.label}
                              required
                            >
                              {field.options?.map((option) => (
                                <MenuItem
                                  key={option.value._id || uuidv4()}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </>
                        ) : field.type === "textarea" ? (
                          <TextField
                            id={field.id}
                            name={field.id}
                            label={field.label}
                            multiline
                            rows={1}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ""}
                            onChange={(e) =>
                              handleChange(field.id, e.target.value)
                            }
                            error={!!errors[field.id]}
                            helperText={errors[field.id]}
                          />
                        ) : (
                          <TextField
                            id={field.id}
                            label={field.label}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ""}
                            onChange={(e) =>
                              handleChange(field.id, e.target.value)
                            }
                            error={!!errors[field.id]}
                            helperText={errors[field.id]}
                          />
                        )}
                      </FormControl>
                    </Grid>
                  );
                })}
              </Grid>

              <Box textAlign="center">
                <Button type="submit" variant="contained" sx={{ mt: 4 }}>
                  {Object.keys(initialValues).length > 0
                    ? "Atualizar"
                    : "Cadastrar"}
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Box>
    </Container>
  );
};

export default DynamicForm;
