"use client"
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import React, { useState } from 'react';
import { Container, Stack, Card, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button, Checkbox, FormControlLabel, Box } from '@mui/material';

export default function RegisterProfessors() {
  const [cursosSelecionados, setCursosSelecionados] = useState([]);
  const [titulacao, setTitulacao] = useState('');
  const [unidadeID, setUnidadeID] = useState('');
  const [statusAtividade, setStatusAtividade] = useState('Ativo');

  const cursos = [
    { _id: 'curso1', sigla: 'DSM' },
    { _id: 'curso2', sigla: 'CO' },
    { _id: 'curso3', sigla: 'CDN' },
  ];

  

  return (
    <Container sx={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 10}}>

      <Navbar />
      <Card sx={{ width: '100%', maxWidth: 900, padding: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Cadastro de Professor<br />Fatec Votorantim
        </Typography>
        <Box component="form" sx={{ maxWidth: 800, mx: 'auto', mt: 4 }} onSubmit={(e) => e.preventDefault()}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <TextField label="Nome" fullWidth required placeholder="Nome Completo" />
              <TextField label="E-mail" type="email" fullWidth required placeholder="E-mail" />            
              <FormControl fullWidth required>
                <InputLabel>Titulação</InputLabel>
                <Select value={titulacao} onChange={(e) => setTitulacao(e.target.value)} label="Titulação">
                  <MenuItem value="Especialista">Especialista</MenuItem>
                  <MenuItem value="Mestre">Mestre</MenuItem>
                  <MenuItem value="Doutor">Doutor</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Número Matrícula" type="number" fullWidth required placeholder="Número da Matrícula" inputProps={{ min: 0 }} />
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <FormControl fullWidth required>
                <InputLabel>Código UE</InputLabel>
                <Select value={unidadeID} onChange={(e) => setUnidadeID(e.target.value)} label="Código UE">
                  <MenuItem value="301 - Votorantim">301 - Votorantim</MenuItem>
                  <MenuItem value="123 - Sorocaba">123 - Sorocaba</MenuItem>
                  <MenuItem value="900 - Tatuí">900 - Tatuí</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Lattes (URL)" type="url" fullWidth required placeholder="Ex: http://www.lattes.com.br" />
              <TextField label="Referência" fullWidth required placeholder="Ex: PES I - A" />
              <TextField label="Observações" fullWidth placeholder="Observações" />
            </Stack>
            <Typography variant="subtitle1">Cursos</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              {cursos.map((curso) => (
                <FormControlLabel
                  key={curso._id}
                  control={<Checkbox />}
                  label={curso.sigla}
                />
              ))}
              <FormControl fullWidth required>
                <InputLabel>Status</InputLabel>
                <Select value={statusAtividade} onChange={(e) => setStatusAtividade(e.target.value)} label="Status">
                  <MenuItem value="Ativo">Ativo</MenuItem>
                  <MenuItem value="Desativado">Desativado</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            
            <Box textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Box>
          </Stack>
        </Box>
      </Card>
      <Footer/>
    </Container>
  );
}
