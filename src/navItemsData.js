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
  
  export default navItems