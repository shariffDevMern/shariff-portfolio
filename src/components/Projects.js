import { Container, Grid, Typography } from "@mui/material";

import textBg from "./textbg";
import animations from "./animations";
import MediaCard from "./projectCard";

const projectData = [
  {
    img: "/design-project1.jpeg",
    title: "E-commerce Platform",
    description: "Designed an UI for shopping of ecommerce page.",
    skills: ["HTML, CSS, JS, Node.js"],
    link: "https://www.behance.net/gallery/183330635/shopping-app-interface-using-figma",
  },
  {
    img: "/design-project2.png",
    title: "Secure Client Assistance",
    description:
      "Built a secure platform using blockchain technology to enhance client service and protect data.",
    skills: ["BlockChain ,AI/ML"],
    link: "https://github.com/Mukeshsudhan/event",
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

      <Grid gap={2} sx={{ marginTop: 2 }} container>
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
