import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#393E46",
        width: "100vw",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PROJECTS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
