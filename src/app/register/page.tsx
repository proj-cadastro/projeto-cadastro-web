"use client"
import Footer from "@/components/organisms/Footer";
import { Container, Stack, Card, TextField, Box } from '@mui/material';
import Image from 'next/image';
import TitleText from "@/components/atoms/TitleText";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import StyledLink from "@/components/atoms/StyledLink";
import BodyText from "@/components/atoms/BodyText";

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
              backgroundColor: 'white',
              p: 2,
              flexShrink: 0,
              border: '3px solid lightgray',
              borderRadius: '5px',          
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
            <Box marginBottom={5}>
              <TitleText text="Cadastro de Usuários" />
            </Box>

            <Stack spacing={2}>
              <TextField label="Nome" fullWidth required placeholder="Nome Completo" />
              <TextField label="E-mail" type="email" fullWidth required placeholder="E-mail" />
              <TextField label="Senha" type="password" fullWidth required placeholder="Senha" />
              <Box textAlign="center">
                <PrimaryButton text="Cadastrar" href="" />
              </Box>
              <Box textAlign="center">
                <BodyText text="Já possui uma conta?"/>
                <StyledLink text="Entrar" href="/login" />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Card>
      <Footer />
    </Container>
  );
}
