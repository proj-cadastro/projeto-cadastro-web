"use client"

import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { Box, Card, Container, Stack, FormControl, Select, InputLabel, MenuItem, TextField } from "@mui/material";
import TitleRegister from "@/components/atoms/TitleRegister";
import InputCount from "@/components/atoms/InputCount";
import InputField from "@/components/atoms/InputField";
import React, { useState } from 'react';
import RegisterButton from "@/components/atoms/RegisterButton";


export default function RegisterCourses() {

  const [modalidade, setModalidade] = useState('');
  const [professor, setProfessor] = useState('');
  const [coordenador, setCoordenador] = useState('');

  return (

    <Container sx={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 10}}>
      <Navbar />
      <Card sx={{ width: '100%', maxWidth: 900, padding: 4 }}>
        <TitleRegister text="Cadastro de Cursos" subText="Fatec Votorantim" />
        <Box component="form" sx={{ maxWidth: 800, mx: 'auto', mt: 4 }} onSubmit={(e) => e.preventDefault()}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <InputField id="course name" label="Nome do Curso" autoFocus placeholder="Digite o nome do Curso"/>
              <InputCount id="course code" label="Código do Curso" type="number" autoFocus placeholder=" Digite o código do Curso"/>
              <InputField id="course acronym" label="Sigla" autoFocus placeholder="Digite a sigla do curso"/>
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <FormControl fullWidth required>
              <InputLabel>Modalidade</InputLabel>
              <Select value={modalidade} onChange={(e) => setModalidade(e.target.value)} label="Modalidade">
                <MenuItem value="Presencial">Presencial</MenuItem>
                <MenuItem value="Hibrido">Hibrido</MenuItem>
                <MenuItem value="EaD">EaD</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth required>
              <InputLabel>Professores</InputLabel>
              <Select value={professor} onChange={(e) => setProfessor(e.target.value)} label="Professores">
                <MenuItem value="Prof1">Prof1</MenuItem>
                <MenuItem value="Prof2">Prof2</MenuItem>
                <MenuItem value="Prof3">Prof3</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth required>
              <InputLabel>Coordenador</InputLabel>
              <Select value={coordenador} onChange={(e) => setCoordenador(e.target.value)} label="Coordenador">
                <MenuItem value="Coord">Coordenador1</MenuItem>
              </Select>
            </FormControl>
            </Stack>
            <Box>
            <TextField
              fullWidth
              label="Disciplinas"
              id="inputDisciplinasCurso"
              name="inputDisciplinas"
              placeholder="Digite as disciplinas que compõem o curso separadas por vírgula."
              multiline
              rows={3}  // Número de linhas visíveis
              variant="outlined"  // Estilo do campo (pode ser "filled" ou "standard")
              margin="normal"  // Margem para o campo
            />
            </Box>
            <Box textAlign="center">
              <RegisterButton text="Cadastrar" />
            </Box>
          </Stack>
        </Box>
      </Card>        
      <Footer />
    </Container>
  );
}
  