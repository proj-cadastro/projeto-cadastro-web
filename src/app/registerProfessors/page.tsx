"use client";
import TitleRegister from "@/components/atoms/TitleRegister";
import InputCount from "@/components/atoms/InputCount";
import InputField from "@/components/atoms/InputField";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import React, { useState } from "react";
import {
  Container,
  Stack,
  Card,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Box,
  Grid2,
} from "@mui/material";
import RegisterButton from "@/components/atoms/RegisterButton";

export default function RegisterProfessors() {
  const [titulacao, setTitulacao] = useState("");
  const [unidadeID, setUnidadeID] = useState("");
  const [statusAtividade, setStatusAtividade] = useState("Ativo");

  const cursos = [
    { _id: "curso1", sigla: "DSM" },
    { _id: "curso2", sigla: "CO" },
    { _id: "curso3", sigla: "CDN" },
  ];

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        pt: 10,
      }}
    >
      {/* Navbar */}
      <Box sx={{ pt: 2 }}>
        <Navbar />
      </Box>

      {/* Form Container */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          px: 2,
        }}
      >
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 size={12}>
            <Card sx={{ width: "100%", padding: 4 }}>
              <TitleRegister
                text="Cadastro de Professor"
                subText="Fatec Votorantim"
              />
              <Box
                component="form"
                sx={{ mt: 2 }}
                onSubmit={(e) => e.preventDefault()}
              >
                <Stack spacing={0.5}>
                  <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                    <InputField
                      id="name"
                      label="Nome"
                      autoFocus
                      placeholder="Nome Completo"
                    />
                    <InputField id="email" label="E-mail" placeholder="Email" />
                    <FormControl fullWidth required>
                      <InputLabel>Titulação</InputLabel>
                      <Select
                        value={titulacao}
                        onChange={(e) => setTitulacao(e.target.value)}
                        label="Titulação"
                      >
                        <MenuItem value="Especialista">Especialista</MenuItem>
                        <MenuItem value="Mestre">Mestre</MenuItem>
                        <MenuItem value="Doutor">Doutor</MenuItem>
                      </Select>
                    </FormControl>
                    <InputCount
                      id="register number"
                      label="Número de Matrícula"
                      type="number"
                      placeholder="N° da Matrícula"
                    />
                  </Stack>

                  <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                    <FormControl fullWidth required>
                      <InputLabel>Código UE</InputLabel>
                      <Select
                        value={unidadeID}
                        onChange={(e) => setUnidadeID(e.target.value)}
                        label="Código UE"
                      >
                        <MenuItem value="301 - Votorantim">
                          301 - Votorantim
                        </MenuItem>
                        <MenuItem value="123 - Sorocaba">
                          123 - Sorocaba
                        </MenuItem>
                        <MenuItem value="900 - Tatuí">900 - Tatuí</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      label="Lattes (URL)"
                      type="url"
                      fullWidth
                      required
                      placeholder="Ex: http://www.lattes.com.br"
                    />
                    <TextField
                      label="Referência"
                      fullWidth
                      required
                      placeholder="Ex: PES I - A"
                    />
                    <TextField
                      label="Observações"
                      fullWidth
                      placeholder="Observações"
                    />
                  </Stack>

                  <Typography variant="subtitle1">Cursos</Typography>
                  <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                    {cursos.map((curso) => (
                      <FormControlLabel
                        key={curso._id}
                        control={<Checkbox />}
                        label={curso.sigla}
                      />
                    ))}
                    <FormControl fullWidth required>
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={statusAtividade}
                        onChange={(e) => setStatusAtividade(e.target.value)}
                        label="Status"
                      >
                        <MenuItem value="Ativo">Ativo</MenuItem>
                        <MenuItem value="Desativado">Desativado</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
                <Box textAlign="center" sx={{ mt: 2, mb: 0 }}>
                  <RegisterButton text="Cadastrar" />
                </Box>
              </Box>
            </Card>
          </Grid2>
        </Grid2>
      </Box>

      {/* Footer */}
      <Box sx={{ mt: 12 }}>
        <Footer />
      </Box>
    </Container>
  );
}
