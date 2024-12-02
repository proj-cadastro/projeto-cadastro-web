/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
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
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    return fields.reduce<Record<string, any>>((acc, field) => {
      acc[field.id] = initialValues[field.id] || ""; // Inicializa todos os campos como string vazia
      return acc;
    }, {});
  });

  const [errors, setErrors] = useState<Record<string, string>>({}); // Adicionando estado para erros

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação apenas para campos de texto
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (
        field.required &&
        (field.type === "text" ||
          field.type === "textarea" ||
          field.type === "url") &&
        !formData[field.id]
      ) {
        newErrors[field.id] = `${field.label} é obrigatório`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Interrompe a execução se houver erros
    }

    // Aplica transformações nos valores do formulário
    const transformedData = fields.reduce<Record<string, any>>((acc, field) => {
      const rawValue = formData[field.id];
      acc[field.id] = field.transformValue
        ? field.transformValue(rawValue)
        : rawValue;
      return acc;
    }, {});

    setErrors({}); // Limpa erros
    onSubmit(transformedData); // Envia os dados transformados
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
                  const fieldId = field.id; // Gerando um ID único para cada campo

                  if (field.type === "checkbox") {
                    return (
                      <Grid item xs={12} key={field.id}>
                        <Stack
                          direction={{ xs: "column", md: "row" }}
                          spacing={2}
                        >
                          {field.options?.map((option) => (
                            <FormControlLabel
                              key={option.value._id || uuidv4()} // Usando uuidv4 se não tiver _id
                              control={
                                <Checkbox
                                  id={option.value._id || uuidv4()} // Adicionando ID único para autofill
                                  name={option.value._id || uuidv4()}
                                  checked={formData[field.id]?.includes(
                                    option.value
                                  )} // Verificando se a opção está selecionada
                                  onChange={() => {
                                    const newValues = [
                                      ...(formData[field.id] || []),
                                    ]; // Garantir que formData[field.id] seja um array
                                    if (newValues.includes(option.value)) {
                                      // Se já estiver selecionada, desmarque
                                      newValues.splice(
                                        newValues.indexOf(option.value),
                                        1
                                      );
                                    } else {
                                      // Se não estiver, adicione
                                      newValues.push(option.value);
                                    }
                                    handleChange(field.id, newValues); // Atualiza o estado
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
                            <InputLabel id={fieldId}>{field.label}</InputLabel>
                            <Select
                              id={field.id} // Adicionando ID único para autofill
                              name={field.id}
                              value={formData[field.id] || ""} // Adiciona valor vazio se não houver valor
                              onChange={(e) =>
                                handleChange(field.id, e.target.value)
                              }
                              label={field.label}
                              required
                            >
                              {field.options?.map((option, index) => (
                                <MenuItem
                                  key={option.value._id || uuidv4()} // Usando uuidv4 se não tiver _id
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </>
                        ) : field.type === "textarea" ? (
                          <TextField
                            id={field.id} // Adicionando ID único para autofill
                            name={field.id}
                            label={field.label}
                            multiline
                            rows={1}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ""}
                            onChange={(e) =>
                              handleChange(field.id, e.target.value)
                            }
                            error={!!errors[field.id]} // Exibe erro se houver
                            helperText={errors[field.id]} // Texto de erro
                          />
                        ) : (
                          <TextField
                            id={field.id} // Adicionando ID único para autofill
                            label={field.label}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ""}
                            onChange={(e) =>
                              handleChange(field.id, e.target.value)
                            }
                            error={!!errors[field.id]} // Exibe erro se houver
                            helperText={errors[field.id]} // Texto de erro
                          />
                        )}
                      </FormControl>
                    </Grid>
                  );
                })}
              </Grid>

              <Box textAlign="center">
                <Button type="submit" variant="contained" sx={{ mt: 4 }}>
                  {initialValues._id ? "Atualizar" : "Cadastrar"}
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
