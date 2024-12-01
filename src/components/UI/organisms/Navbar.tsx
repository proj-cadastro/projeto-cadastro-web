"use client";

import {
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";
import LogoNavbar from "../atoms/LogoNavbar";
import ResposiveMenuNavbar from "../molecules/ResponsiveMenuNavbar";
import ButtonPlaceNavbar from "../molecules/ButtonPlaceNavbar";

function Navbar() {
  return (
    <AppBar
      sx={{
        position: "fixed",
        backgroundColor: "#fff",
        color: "#fff",
        height: "85px",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <LogoNavbar />          
        </IconButton>

        <ButtonPlaceNavbar />       
        
        <ResposiveMenuNavbar />     

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ display: { xs: "flex", md: "none" , justifyContent: "center",  
            alignItems: "center",
            margin: "auto",  } }}
        ><LogoNavbar /></IconButton>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;