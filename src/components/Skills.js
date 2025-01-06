import {
  Box,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import LabelBottomNavigation from "./BottomNavigation";
import textBg from "./textbg";
import animations from "./animations";
import * as React from "react";

const technicalSkills = [
  {
    altText: "spring boot",
    url: "/python.png",
    name: "Python",
    level:4
  },
  {
    altText: "html",
    url: "/html.png",
    name: "HTML",
    level:5
  },
  {
    altText: "css",
    url: "/css.png",
    name: "CSS",
    level:5
  },
  {
    altText: "js",
    url: "/js.png",
    name: "JS",
    level:4
  },
  {
    altText: "Node js",
    url: "/nodejs.png",
    name: "Node js",
    level:3
  },
  {
    altText: "React js",
    url: "/react.png",
    name: "React js",
    level:4
  },
  {
    altText: "MySQL",
    url: "/sql.png",
    name: "MySQL",
    level:4
  },
];
const nonTechniaclSkills = [
  {
    altText: "communication",
    url: "/communication.png",
    name: "Communication",
    level:4
  },
  {
    altText: "creativity",
    url: "/creativity.png",
    name: "Creativity",
    level:5
  },
  {
    altText: "leadership",
    url: "/leadership.png",
    name: "Leadership",
    level:4
  },
  {
    altText: "teamwork",
    url: "/teamwork.png",
    name: "Team Work",
    level:3
  },
  {
    altText: "problem-solving",
    url: "/problem-solving.png",
    name: "Problem Solving",
    level:4
  },
];

const Skills = () => {
  const [value, setValue] = React.useState("technical");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTechSkills = () => (
    <Box py={2}>
      <Typography
        sx={{ ...textBg, ...animations.scale }}
        color="secondary"
        variant="h2"
        component={"h1"}
      >
        Technical Skills
      </Typography>
      <Grid container>
        {technicalSkills.map((skills, index) => {
          if (index % 2 === 0) {
            return (
              <Grid
              key={skills.name}
                margin={1}
                xs={5}
                p={2}
                item
                sx={{
                  ...animations.slideRight,
                  ...textBg,
                  borderStyle: "solid",
                  borderWidth: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <img
                  style={{
                    height: 80,
                    width: 80,
                  }}
                  src={skills.url}
                  alt={skills.altText}
                />
                <Typography variant="h6">{skills.name}</Typography>
                <Rating name="read-only" value={skills.level} readOnly />
              </Grid>
            );
          }
          return (
            <Grid
            key={skills.name}
              margin={1}
              xs={5}
              p={2}
              item
              sx={{
                ...animations.slideLeft,
                ...textBg,
                borderStyle: "solid",
                borderWidth: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <img
                style={{
                  height: 80,
                  width: 80,
                }}
                src={skills.url}
                alt={skills.altText}
              />
              <Typography variant="h6">{skills.name}</Typography>
              <Rating name="read-only" value={skills.level} readOnly />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
  const renderNonTechSkills = () => (
    <Box py={2}>
      <Typography
        sx={{ ...textBg, ...animations.scale }}
        color="secondary"
        variant="h2"
        component={"h1"}
      >
        Non-Technical Skills
      </Typography>
      <Grid container>
        {nonTechniaclSkills.map((skills, index) => {
          if (index % 2 === 0) {
            return (
              <Grid
                key={skills.name}
                margin={1}
                xs={5}
                p={2}
                item
                sx={{
                  ...animations.slideRight,
                  ...textBg,
                  borderStyle: "solid",
                  borderWidth: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <img
                  style={{
                    height: 80,
                    width: 80,
                  }}
                  src={skills.url}
                  alt={skills.altText}
                />
                <Typography variant="h6">{skills.name}</Typography>
                <Rating name="read-only" value={skills.level} readOnly />
              </Grid>
            );
          }
          return (
            <Grid
            key={skills.name}
              margin={1}
              xs={5}
              p={2}
              item
              sx={{
                ...animations.slideLeft,
                ...textBg,
                borderStyle: "solid",
                borderWidth: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <img
                style={{
                  height: 80,
                  width: 80,
                }}
                src={skills.url}
                alt={skills.altText}
              />

              <Typography variant="h6">{skills.name}</Typography>
              <Rating name="read-only" value={skills.level} readOnly />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
  const renderSkills = () => {
    switch (value) {
      case "technical":
        return renderTechSkills();
      case "non-technical":
        return renderNonTechSkills();
      default:
        return null;
    }
  };
  return (
    <Container>
      <LabelBottomNavigation value={value} handleChange={handleChange} />

      {renderSkills()}
    </Container>
  );
};

export default Skills;
