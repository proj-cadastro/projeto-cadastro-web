import React, { useState, MouseEvent } from "react";
import { Box, Menu } from "@mui/material";
import NavbarButton from "../atoms/NavbarButton";
import MenuItemNavbar from "../atoms/MenuItemNavbar";
import LogoutButton from "../atoms/LogoutButton";
import { useRouter } from "next/navigation";

export default function ButtonPlaceNavbar() {
  const router = useRouter();
  const [anchorRelatorios, setAnchorRelatorios] = useState<null | HTMLElement>(
    null
  );
  const [anchorCadastro, setAnchorCadastro] = useState<null | HTMLElement>(
    null
  );

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

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <Box
      sx={{ display: { xs: "none", md: "flex", gap: 2, marginLeft: "auto" } }}
    >
      <NavbarButton text="Início" href="/home" />

      {/* Menu "Cadastro" */}
      <NavbarButton text="Cadastro" onClick={openCadastroMenu} />
      <Menu
        anchorEl={anchorCadastro}
        open={Boolean(anchorCadastro)}
        onClose={closeCadastroMenu}
      >
        <MenuItemNavbar
          text="Professores"
          onClick={closeCadastroMenu}
          href="/professor/registerProfessorsComponentizado"
        />
        <MenuItemNavbar
          text="Cursos"
          onClick={closeCadastroMenu}
          href="/course/registerCoursesComponentizado"
        />
      </Menu>

      <NavbarButton text="Relatórios" onClick={openRelatoriosMenu} />
      <Menu
        anchorEl={anchorRelatorios}
        open={Boolean(anchorRelatorios)}
        onClose={closeRelatoriosMenu}
      >
        <MenuItemNavbar
          text="Professores"
          onClick={closeRelatoriosMenu}
          href="/professor/reportProfessors"
        />
        <MenuItemNavbar
          text="Cursos"
          onClick={closeRelatoriosMenu}
          href="/course/reportCourses"
        />
      </Menu>

      <LogoutButton text="Sair" onClick={handleLogout} />
    </Box>
  );
}
