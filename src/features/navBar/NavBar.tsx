import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      style={{ background: "#F2F2F2", color: "#333333", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{
            textDecoration: "none",
            color: "#333333",
            borderBottom:
              location.pathname === "/" ? "2px solid #007bff" : "none",
          }}
        >
          Home
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/projects"
          style={{
            textDecoration: "none",
            color: "#333333",
            marginLeft: 10,
            marginRight: "auto",
            borderBottom:
              location.pathname === "/projects" ? "2px solid #007bff" : "none",
          }}
        >
          Projects
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
