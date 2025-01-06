import { Container, Divider, Grid, Typography } from "@mui/material";
import textBg from "./textbg";
import animations from "./animations";
import ResponsiveStack from "./languageStack";
import MediaCard from "./EducationCard";

const About = () => {
  return (
    <Container>
      <Grid sx={{ ...textBg }} container paddingY={2}>
        <Grid sx={{ ...animations.slideLeft }} xs={12} md={1} item>
          <Typography variant="h2" color="secondary">
            About
          </Typography>
        </Grid>
        <Grid xs={12} md={1} item>
          <Divider
            sx={{ display: { xs: "none", md: "block" } }}
            orientation="vertical"
          />
          <Divider sx={{ display: { md: "none" } }} orientation="horizontal" />
        </Grid>

        <Grid
          sx={{ ...animations.slideRight }}
          marginLeft={{ xs: 0, sm: 2 }}
          xs={12}
          md={9}
          item
        >
          <Typography variant="h6">
            Hello, I'm Deepika P, an aspiring Software Developer currently
            pursuing my B.Tech in Information Technology at Panimalar Institute
            of Technology, Chennai. With a strong foundation in programming and
            problem-solving, I am passionate about creating high-quality,
            user-centric software solutions. From developing secure platforms
            using blockchain to building responsive e-commerce websites, I have
            honed my technical skills through academic and self-initiated
            projects. My expertise spans frontend technologies like HTML, CSS,
            JavaScript, and React.js, as well as backend frameworks like Node.js
            and Spring Boot. I am also well-versed in databases such as MySQL
            and tools like Git and GitHub. I have further enhanced my skill set
            through certifications in Java, Full Stack Development, and Machine
            Learning, and gained hands-on experience during internships in AI
            and Machine Learning. My goal is to contribute meaningfully to the
            tech industry while continuously learning and growing. If you share
            a passion for technology, innovation, or software development, I'd
            love to connect. Let’s collaborate and explore how we can drive
            impactful solutions in this ever-evolving digital landscape!
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ ...textBg }} container paddingY={2}>
        <Grid sx={{ ...animations.slideLeft }} xs={12} md={1} item>
          <Typography variant="h4" color="secondary">
            Languages-Known
          </Typography>
        </Grid>
        <Grid xs={12} md={1} item>
          <Divider
            sx={{ display: { xs: "none", md: "block" } }}
            orientation="vertical"
          />
          <Divider sx={{ display: { md: "none" } }} orientation="horizontal" />
        </Grid>

        <Grid
          sx={{ ...animations.slideRight }}
          marginLeft={{ xs: 0, sm: 2 }}
          xs={12}
          md={9}
          item
        >
          <ResponsiveStack />
        </Grid>
      </Grid>
      <Grid sx={{ ...textBg }} container paddingY={2}>
        <Grid sx={{ ...animations.slideLeft }} xs={12} md={1} item>
          <Typography variant="h4" color="secondary">
            Education
          </Typography>
        </Grid>
        <Grid xs={12} md={1} item>
          <Divider
            sx={{ display: { xs: "none", md: "block" } }}
            orientation="vertical"
          />
          <Divider sx={{ display: { md: "none" } }} orientation="horizontal" />
        </Grid>

        <Grid
          sx={{ ...animations.slideRight }}
          marginLeft={{ xs: 0, sm: 2 }}
          xs={12}
          md={9}
          item
        >
          <MediaCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
