import { Container, Divider, Grid, Typography } from "@mui/material"
import textBg from "./textbg";
import animations from "./animations";
import ResponsiveStack from "./languageStack";
import MediaCard from "./EducationCard";


const About = () => {
  return <Container>
    
    <Grid sx={{...textBg}} container paddingY={2}>
      <Grid sx={{...animations.slideLeft,

}}  xs={12} md={1} item>
      <Typography variant="h2" color="secondary">
        About
      </Typography>
      
      </Grid>
      <Grid xs={12} md={1} item>
      <Divider sx={{display:{xs:'none',md:'block'}}} orientation="vertical" />
      <Divider sx={{display:{md:'none'}}} orientation="horizontal" />
      </Grid>
      
      <Grid sx={{...animations.slideRight,

      }} marginLeft={{xs:0,sm:2}}  xs={12} md={9} item>
      <Typography variant="h5">
      Hello, I'm Mukesh Sudhan, a dedicated Computer Science student currently pursuing my B.E. at JNN Institute of Engineering. I have always been captivated by the world of programming and software development.
My goal is to leverage my skills and knowledge to make a meaningful contribution to the tech industry, and I am open to exciting opportunities that align with my passion
If you share a similar interest in technology, programming, or software development, I'd love to connect. Let's explore the endless possibilities that this digital world has to offer and grow together
      </Typography>
      
      </Grid>
      
    </Grid>
    <Grid sx={{...textBg}} container paddingY={2}>
      <Grid sx={{...animations.slideLeft,

}}  xs={12} md={1} item>
      <Typography variant="h4" color="secondary">
        Languages-Known
      </Typography>
      
      </Grid>
      <Grid xs={12} md={1} item>
      <Divider sx={{display:{xs:'none',md:'block'}}} orientation="vertical" />
      <Divider sx={{display:{md:'none'}}} orientation="horizontal" />
      </Grid>
      
      <Grid sx={{...animations.slideRight,

      }} marginLeft={{xs:0,sm:2}}  xs={12} md={9} item>
      
      <ResponsiveStack/>
      
      </Grid>
      
    </Grid>
    <Grid sx={{...textBg}} container paddingY={2}>
      <Grid sx={{...animations.slideLeft,

}}  xs={12} md={1} item>
      <Typography variant="h4" color="secondary">
        Education
      </Typography>
      
      </Grid>
      <Grid xs={12} md={1} item>
      <Divider sx={{display:{xs:'none',md:'block'}}} orientation="vertical" />
      <Divider sx={{display:{md:'none'}}} orientation="horizontal" />
      </Grid>
      
      <Grid sx={{...animations.slideRight,

      }} marginLeft={{xs:0,sm:2}}  xs={12} md={9} item>
      <MediaCard/>
      
      
      </Grid>
      
    </Grid>
    
    
  </Container>;
};

export default About;
