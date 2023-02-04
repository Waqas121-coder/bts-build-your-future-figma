import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: "flex", alignItems: "center", paddingTop: "20px" }}>
        <Typography
          color="secondary"
          sx={{
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          Logo here
        </Typography>
      </Box>

      <List>
        {["About", "Build", "RoadMap", "Live RoadMap", "Community"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{
          background:
            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
          width: "100%",
          borderRadius: "36px",
        }}
      >
        Docs
      </Button>
      <Divider />
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer("left", true)}>{anchor}</Button> */}
      <IconButton aria-label="delete" onClick={toggleDrawer("left", true)} sx={{pr:"0"}}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
