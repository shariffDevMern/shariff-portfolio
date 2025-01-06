import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavTabs from "./NavTabs";
import navItems from "../navItemsData";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState(() => {
    const path = location.pathname;
    if (path === "/") {
      return "Home";
    } else if (path === "/about") {
      return "About";
    } else if (path === "/projects") {
      return "Projects";
    } else if (path === "/skills") {
      return "Skills";
    } else if (path === "/contact") {
      return "Contact";
    }
  });
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleChange = (newValue) => {
    if (newValue === "Home") {
      navigate("/", { replace: true });
    } else if (newValue === "About") {
      navigate("/about", { replace: true });
    } else if (newValue === "Projects") {
      navigate("/projects", { replace: true });
    } else if (newValue === "Skills") {
      navigate("/skills", { replace: true });
    } else if (newValue === "Contact") {
      navigate("/contact", { replace: true });
    }
    setActiveTab(newValue);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DEEPIKA P
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                backgroundColor: `${activeTab === item.name && "#2c6798"}`,
                color: `${activeTab === item.name?"white":"#2c6798"}`,
              }}
            >
              <ListItemText
                color="primary"
                onClick={() => {
                  handleChange(item.name);
                }}
                primary={item.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundImage: "linear-gradient(to right,white,#2c6798)",
        }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#647459" }} />
          </IconButton>

          <img
            onClick={()=>{
              navigate("/", { replace: true });
            }}
            alt="logo"
            style={{
              cursor:'pointer',
              height: "50px",
            }}
            src="/profile.png"
          />

          <Box
            marginLeft={"auto"}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <NavTabs />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Toolbar />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
