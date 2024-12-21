import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DrawRoundedIcon from "@mui/icons-material/DrawRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";

const navItems = [
  { name: "Home", url: "/", icon: <HomeIcon /> },
  { name: "About", url: "/about", icon: <InfoIcon /> },
  { name: "Projects", url: "/projects", icon: <EventNoteIcon /> },
  { name: "Skills", url: "/skills", icon: <DrawRoundedIcon /> },
  { name: "Contact", url: "/contact", icon: <ContactSupportRoundedIcon /> },
];
export default function NavTabs() {
  const [value, setValue] = React.useState(() => {
    const path = window.location.pathname;
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

  const handleChange = (event, newValue) => {
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

    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor=""
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        {navItems.map((item) => (
          <Tab
            value={item.name}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "7px;" }}>
                {item.icon} {item.name}
              </Box>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
}
