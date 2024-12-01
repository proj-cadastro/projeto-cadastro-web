import React, { useState, MouseEvent } from "react";
import {
  IconButton,
  Box,
  Menu,
} from "@mui/material";
import MenuItemNavbar from "../atoms/MenuItemNavbar";
import MenuIcon from "@mui/icons-material/Menu";



export default function ResposiveMenuNavbar() {
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
    const [anchorRelatorios, setAnchorRelatorios] = useState<null | HTMLElement>(
        null
    );
    const [anchorCadastro, setAnchorCadastro] = useState<null | HTMLElement>(
        null
    );

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
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={openMenu}
            sx={{ color: "black" }}
          >
            <MenuIcon fontSize="large"/>
          </IconButton>
          <Menu
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            anchorEl={anchorNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuItemNavbar text="Início" href="/home"/>            
            <MenuItemNavbar text="Relatórios" onClick={openRelatoriosMenu}/>            
            <Menu
              anchorEl={anchorRelatorios}
              open={Boolean(anchorRelatorios)}
              onClose={closeRelatoriosMenu}
            > 
              <MenuItemNavbar text="Professores" onClick={closeRelatoriosMenu} href="/professor/reportProfessors"/>            
              <MenuItemNavbar text="Cursos" onClick={closeRelatoriosMenu} href="/course/reportCourses"/> 
            </Menu>
            <MenuItemNavbar text="Cadastro" onClick={openCadastroMenu}/>            
            <Menu
              anchorEl={anchorCadastro}
              open={Boolean(anchorCadastro)}
              onClose={closeCadastroMenu}
            >
              <MenuItemNavbar text="Professores" onClick={closeCadastroMenu} href="/professor/registerProfessorsComponentizado"/>
              <MenuItemNavbar text="Cursos" onClick={closeCadastroMenu} href="/course/registerCoursesComponentizado"/> 
            </Menu>
            <MenuItemNavbar text="Sair" href="/"/>    
          </Menu>
        </Box>
    )
}