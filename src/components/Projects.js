import { Container, Grid, Typography } from "@mui/material";
import QuiltedImageList from "./ProjectCollage";
import textBg from "./textbg";
import animations from "./animations";
import MediaCard from "./projectCard";

const projectData = [
  {
    img: "/design-project1.jpeg",
    title: "Shopping UI",
    description: "Designed an UI for shopping of ecommerce shoe page.",
    skills: ["Figma"],
    link: "https://www.behance.net/gallery/183330635/shopping-app-interface-using-figma",
  },
  {
    img: "/design-project2.png",
    title: "Event invitation page",
    description: "Developed an Event Invitation page to invite people with pleasant.",
    skills: ["HTML, CSS"],
    link: "https://github.com/Mukeshsudhan/event",
  },
  {
    img: "/design-project3.png",
    title: "Battery Charging Animation",
    description: "Developed an Battery Charging Animation at realtime data processing through system.",
    skills: ["HTML, CSS"],
    link: "https://github.com/Mukeshsudhan/batterycharginganimation",
  },
  {
    img: "/design-project4.png",
    title: "Student Registration Form",
    description: "Registration form developed using only skeleton structural language.",
    skills: ["HTML"],
    link: "https://github.com/Mukeshsudhan/student-registration-form",
  },
];

const Projects = () => {
  return (
    <Container sx={{ marginY: 2, ...textBg, ...animations.fade }}>
      <Typography
        sx={{ ...animations.slideLeft }}
        variant="h2"
        color="secondary"
      >
        Projects
      </Typography>
      <Grid container>
        <Grid sx={{ ...animations.slideRight }} item xs={12} md={6}>
          <img
            style={{ width: "100%", height: { xs: 300, md: 380 } }}
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            alt=""
          />
        </Grid>
        <Grid sx={{ ...animations.slideLeft }} xs={12} md={6}>
          <QuiltedImageList />
        </Grid>
      </Grid>
      <Grid  gap={2} sx={{ marginTop: 2 }} container>
        {projectData.map((project) => (
          <Grid item xs={12} md={3}>
            <MediaCard projectData={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
