"use client"
import Footer from "@/components/organisms/Footer";
import { Container, Stack, Card, TextField, Box } from '@mui/material';
import Image from 'next/image';
import LoginPrompt from "@/components/molecules/LoginPrompt";
import TitleText from "@/components/atoms/TitleText";
import PrimaryButton from "@/components/atoms/PrimaryButton";

export default function Register() {
  return (
    <Container sx={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 10 }}>
      <Card sx={{ width: '100%', maxWidth: 900, padding: 4 }}>
        

        
        <Box sx={{ display: 'flex', gap: 3 }}>
          
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'lightgray',
              p: 2,
              flexShrink: 0,              
            }}
          >
            <Image
              src="/assets/logoFatecCapi.png"
              alt="Logo fatec votorantim"
              style={{ maxHeight: 90, maxWidth: '100%', height: 'auto' }}
              width={200}
              height={250}
            />
          </Box>
          
          
          
          <Box component="form" sx={{  maxWidth: 800, mx: 'auto', mt: 4 }} onSubmit={(e) => e.preventDefault()}>
          <TitleText text="Cadastro de Usuários" />
            <Stack spacing={2}>
              <TextField label="Nome" fullWidth required placeholder="Nome Completo" />
              <TextField label="E-mail" type="email" fullWidth required placeholder="E-mail" />
              <TextField label="Senha" type="password" fullWidth required placeholder="Senha" />
              <Box textAlign="center">
                <PrimaryButton text="Cadastrar" href="" />
              </Box>
              <LoginPrompt />
            </Stack>
          </Box>
        </Box>
      </Card>
      <Footer />
    </Container>
  );
}
