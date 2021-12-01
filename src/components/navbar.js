import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      role="navigation"
      aria-label="main navigation"
    >
      <div>


        <div>
          <div>
            <nav id="navlink">

            </nav>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                 
                  <a class="navlink" href="/">Home</a>
                  <a class="navlink" href="/products">Products</a>
                  <a class="navlink" href="/pricing">Pricing</a>
                  <a class="navlink" href="/team">Team</a>
                  <a class="navlink" href="/contact">Contact</a>
                </Toolbar>
              </AppBar>
            </Box>


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;