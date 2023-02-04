import {
  Box,
  Typography,
  Hidden,
  Container,
  Button,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import Sidebar from "./Sidebar";
import React from "react";
import {  NavLink } from "react-router-dom";

let page = [
  {
    name: "About",
    url: "/",
  },
  {
    name: "Build",
    url: "/build",
  },
  {
    name: "Community",
    url: "/community",
  },
];
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: { xs: "10px", sm: "25px", md: "50px" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            color="secondary"
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "700",
              fontSize: { md: "24px", sm: "21px", xs: "18px" },
            }}
          >
            Logo here
          </Typography>
        </Box>
        <Hidden mdDown>
          <Box sx={{ display: "flex", alignItems: "center", gap: "75px" }}>
            {page.map(({ name, url }, index) => (
              <Box key={index}>
                <NavLink
                  to={url}
                  style={({ isActive }) => ({
                    color: isActive ? "#6100BF" : "#000",
                    background: isActive ? "#7600dc" : "#f0f0f0",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  <Typography
                    sx={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "bold",
                      fontSize: { md: "24px", sm: "21px", xs: "18px" },
                    }}
                  >
                    {name}
                  </Typography>
                </NavLink>
              </Box>
            ))}
            <div>
              <Typography
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "bold",
                  fontSize: { md: "24px", sm: "21px", xs: "18px" },
                  // color: "red",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                RoadMap
              </Typography>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {/* <Link to="/roadmap"> */}
                <NavLink
                  to="/roadmap"
                  style={({ isActive }) => ({
                    color: isActive ? "#6100BF" : "#000",
                    background: isActive ? "#7600dc" : "#f0f0f0",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  {" "}
                  <MenuItem onClick={handleClose}>RoadMap</MenuItem>
                  {/* </Link> */}
                </NavLink>
                {/* <Link to="/liveroadmap"> */}
                <NavLink
                  to="/liveroadmap"
                  style={({ isActive }) => ({
                    color: isActive ? "#6100BF" : "#000",
                    background: isActive ? "#7600dc" : "#f0f0f0",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  <MenuItem onClick={handleClose}>Live RoadMap</MenuItem>
                  {/* </Link> */}
                </NavLink>
              </Menu>
            </div>
            <Button
              variant="contained"
              sx={{
                background:
                  "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                px: 7,
                borderRadius: "36px",
              }}
            >
              Docs
            </Button>
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Sidebar />
        </Hidden>
      </Box>
    </Container>
  );
};

export default Navbar;
