import { Container, Typography } from "@mui/material";
import AccordionFaq from "./AccordionFaq";
import SocialMediaIcon from "./SocialMediaIcon";
import textBg from "./textbg";
import animations from "./animations";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    
       <Container sx={{py:2}}>
        <ContactForm/>
        <Typography  sx={{...textBg,...animations.slideRight,marginTop:2}} color="secondary" variant="h2">
        FAQ'S
      </Typography>
      
      <AccordionFaq />
      
        <SocialMediaIcon/>
      </Container>
    
  );
};

export default Contact;
