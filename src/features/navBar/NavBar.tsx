import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      style={{ background: "#D4D4D4", color: "#1D2625", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{
            textDecoration: "none",
            color: "#283618",
            borderBottom:
              location.pathname === "/" ? "2px solid #B7673C" : "none",
          }}
          // Mouse-over effect
          onMouseEnter={(e) => (e.currentTarget.style.color = "#B7673C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#283618")}
        >
          Home
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/projects"
          style={{
            textDecoration: "none",
            color: "#283618",
            marginLeft: 20,
            marginRight: "auto",
            borderBottom:
              location.pathname === "/projects" ? "2px solid #B7673C" : "none",
          }}
          // Mouse-over effect
          onMouseEnter={(e) => (e.currentTarget.style.color = "#B7673C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#283618")}
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
