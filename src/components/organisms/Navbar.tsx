"use client"

import React, { useState, MouseEvent } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';




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
        color: "#fff", height: "85px"}}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Image alt="Logo Fatec Votorantim" src="/assets/logoFatecCapi.png" width={100} height={50} style={{ marginBottom: '1rem' }} />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          
          
          <Link href="/home" passHref>
            <Button color="primary">Início</Button>
          </Link>
          
          {/* Menu "Relatórios" */}
          <Button color="primary" onClick={openRelatoriosMenu}>
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
          
          <Button color="primary" onClick={openCadastroMenu}>
            Relatórios
          </Button>
          <Menu anchorEl={anchorCadastro} open={Boolean(anchorCadastro)} onClose={closeCadastroMenu}>
            <Link href="/reportProfessors" passHref>
            <MenuItem onClick={closeCadastroMenu}>Professores</MenuItem>
            </Link>
            <Link href="/registerCourses" passHref>
            <MenuItem onClick={closeCadastroMenu}>Cursos</MenuItem>
            </Link>
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
              vertical: 'bottom', 
              horizontal: 'left',  
            }}
            transformOrigin={{
              vertical: 'top',    
              horizontal: 'left', 
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

