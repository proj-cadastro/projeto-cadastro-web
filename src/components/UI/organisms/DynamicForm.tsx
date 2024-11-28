"use client";

import React, { useState, useEffect } from "react";
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

export interface FieldConfig {
    id: string;
    label: string;
    type: "text" | "number" | "select" | "textarea" | "checkbox" | "url";
    placeholder?: string;
    options?: Array<{ value: any; label: string }>;
    required?: boolean;
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
            acc[field.id] = initialValues[field.id] || ""; // Inicializa com string vazia
            return acc;
        }, {});
    });

    const handleChange = (id: string, value: any) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
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
                                                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                                                    {field.options?.map((option) => (
                                                        <FormControlLabel
                                                            key={option.value}
                                                            control={
                                                                <Checkbox
                                                                    required
                                                                    checked={formData[field.id]?.includes(option.value)}
                                                                    onChange={() => {
                                                                        const newValues = [...(formData[field.id] || [])];
                                                                        if (newValues.includes(option.value)) {
                                                                            newValues.splice(newValues.indexOf(option.value), 1);
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
                                                        <InputLabel>{field.label}</InputLabel>
                                                        <Select
                                                            value={formData[field.id] || ""}
                                                            onChange={(e) => handleChange(field.id, e.target.value)}
                                                            label={field.label}
                                                            required
                                                        >
                                                            {field.options?.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </>
                                                ) : field.type === "textarea" ? (
                                                    <TextField
                                                        label={field.label}
                                                        multiline
                                                        rows={1}
                                                        placeholder={field.placeholder}
                                                        value={formData[field.id] || ""}
                                                        required
                                                        onChange={(e) => handleChange(field.id, e.target.value)}
                                                    />
                                                ) : (
                                                    <TextField
                                                        label={field.label}
                                                        type={field.type}
                                                        placeholder={field.placeholder}
                                                        value={formData[field.id] || ""}
                                                        required
                                                        onChange={(e) => handleChange(field.id, e.target.value)}
                                                    />
                                                )}
                                            </FormControl>
                                        </Grid>
                                    );
                                })}
                            </Grid>

                            <Box textAlign="center">
                                <Button type="submit" variant="contained" sx={{ mt: 4 }}>
                                    {initialValues.id ? "Atualizar" : "Cadastrar"}
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
