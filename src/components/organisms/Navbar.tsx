"use client"

import React, { useState, MouseEvent } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import StyledLink from "../atoms/StyledLink";



function Navbar() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [anchorRelatorios, setAnchorRelatorios] = useState<null | HTMLElement>(null);
  const [anchorCadastro, setAnchorCadastro] = useState<null | HTMLElement>(null);

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  const openRelatoriosMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorRelatorios(event.currentTarget);
  };

  const closeRelatoriosMenu = () => {
    setAnchorRelatorios(null);
  };

  const openCadastroMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorCadastro(event.currentTarget);
  };

  const closeCadastroMenu = () => {
    setAnchorCadastro(null);
  };

  return (
    <AppBar sx={{position: "fixed", backgroundColor: "#fff9",
        color: "#fff"}}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Image alt="Logo Fatec Votorantim" src="/assets/logoFatecCapi.png" width={100} height={50} style={{ marginBottom: '1rem' }} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          Fatec Votorantim
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/* Usando Link para navegar para a página /home */}
          
          <Link href="/home" passHref>
            <Button color="inherit">Início</Button>
          </Link>
          
          {/* Menu "Relatórios" */}
          <Button color="inherit" onClick={openRelatoriosMenu}>
            Cadastro
          </Button>
          <Menu anchorEl={anchorRelatorios} open={Boolean(anchorRelatorios)} onClose={closeRelatoriosMenu}>
            
            <Link href="/registerProfessors" passHref>
                <MenuItem onClick={closeRelatoriosMenu}>Professores</MenuItem>
            </Link>

            <Link href="/registerCourses" passHref>
                <MenuItem onClick={closeRelatoriosMenu}>Cursos</MenuItem>
            </Link>
          </Menu>
          {/* Menu "Cadastro" */}
          <Button color="inherit" onClick={openCadastroMenu}>
            Relatórios
          </Button>
          <Menu anchorEl={anchorCadastro} open={Boolean(anchorCadastro)} onClose={closeCadastroMenu}>
            
            <MenuItem onClick={closeCadastroMenu}>Professores</MenuItem>

            <MenuItem onClick={closeCadastroMenu}>Cursos</MenuItem>

          </Menu>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" onClick={openMenu}>
            <Image alt="Logo Fatec Votorantim" src="/assets/logoFatecCapi.png" width={100} height={50} style={{ marginBottom: '1rem' }} />
          </IconButton>
          <Menu
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            anchorEl={anchorNav}
            anchorOrigin={{
              vertical: 'bottom', // Posição abaixo da imagem
              horizontal: 'left',  // Alinha o menu à esquerda
            }}
            transformOrigin={{
              vertical: 'top',    // Transforma o menu para começar do topo
              horizontal: 'left', // Alinha o menu à esquerda
            }}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuItem>
              <Link href="/home" passHref>
                Início
              </Link>
            </MenuItem>
            <MenuItem onClick={openRelatoriosMenu}>Relatórios</MenuItem>
            <Menu anchorEl={anchorRelatorios} open={Boolean(anchorRelatorios)} onClose={closeRelatoriosMenu}>
              <MenuItem onClick={closeRelatoriosMenu}>Professores</MenuItem>
              <MenuItem onClick={closeRelatoriosMenu}>Cursos</MenuItem>
            </Menu>
            <MenuItem onClick={openCadastroMenu}>Cadastro</MenuItem>
            <Menu anchorEl={anchorCadastro} open={Boolean(anchorCadastro)} onClose={closeCadastroMenu}>
              <MenuItem onClick={closeCadastroMenu}>Professores</MenuItem>
              <MenuItem onClick={closeCadastroMenu}>Cursos</MenuItem>
            </Menu>
          </Menu>
        </Box>

        <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'flex', md: 'none' } }}></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          Fatec Votorantim
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

