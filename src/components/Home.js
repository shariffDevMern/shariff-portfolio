import { Box, Container, Grid, Typography, Avatar, Button } from "@mui/material";
import Background from "./Background";

const animations = {
  bounce: {
    "@keyframes bounce": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-20px)",
      },
    },
    animation: "bounce 1s infinite",
  },
  rotate: {
    "@keyframes rotate": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
    animation: "rotate 2s linear infinite",
  },
  scale: {
    "@keyframes scale": {
      "0%": { transform: "scale(0.1)" },
      "100%": { transform: "scale(1)" },
    },
    animation: "scale 1s",
  },
  fade: {
    "@keyframes fade": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    animation: "fade 1s ",
  },
  slideLeft: {
    "@keyframes slideLeft": {
      "0%": { transform: "translateX(50px)" },
      "100%": { transform: "translateX(0px)" },
    },
    animation: "slideLeft 1s",
  },
  slideRight: {
    "@keyframes slideRight": {
      "0%": { transform: "translateX(-50px)" },
      "100%": { transform: "translateX(0px)" },
    },
    animation: "slideRight 1s ",
  },
  pulsate: {
    "@keyframes pulsate": {
      "0%, 100%": { transform: "scale(1)", opacity: 1 },
      "50%": { transform: "scale(1.2)", opacity: 0.5 },
    },
    animation: "pulsate 1.5s infinite",
  },
  wobble: {
    "@keyframes wobble": {
      "0%": { transform: "rotate(0deg)" },
      "25%": { transform: "rotate(5deg)" },
      "50%": { transform: "rotate(-5deg)" },
      "100%": { transform: "rotate(0deg)" },
    },
    animation: "wobble 1s infinite",
  },
  flip: {
    "@keyframes flip": {
      "0%": { transform: "rotateY(0deg)" },
      "100%": { transform: "rotateY(360deg)" },
    },
    animation: "flip 1.5s infinite",
  },
  swing: {
    "@keyframes swing": {
      "0%": { transform: "rotate(0deg)" },
      "50%": { transform: "rotate(15deg)" },
      "100%": { transform: "rotate(-15deg)" },
    },
    animation: "swing 1s infinite",
  },
  shake: {
    "@keyframes shake": {
      "0%, 100%": { transform: "translateX(0)" },
      "25%": { transform: "translateX(-5px)" },
      "75%": { transform: "translateX(5px)" },
    },
    animation: "shake 0.5s infinite",
  },
};

const Home = () => {
  return (
    <Background>
      <Container>
        <Grid marginTop={"100px"} container>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              gap: { md: 20, xs: 5 },
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
            }}
            item
          >
            <Box
              sx={{
                ...animations.fade,
                backgroundColor: "rgba(255, 255, 255, 0.7)", // White translucent background
                backdropFilter: "blur(1px)", // Feathered blur effect
                borderRadius: "100px", // Rounded corners
                boxShadow: "0 0 30px 10px rgba(255, 255, 255, 0.5)", // Outer glow for blending
                // Internal spacing
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "inherit", // Matches parent radius
                  background: "linear-gradient(white, rgba(255,255,255,0) 70%)", // Fades edges
                  zIndex: -1, // Behind the box
                  filter: "blur(15px)", // Additional blur for blending
                },
              }}
            >
              <Typography
                color="secondary"
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
                variant="h1"
              >
                Hello{" "}
                <Typography
                  variant="h2"
                  sx={{
                    ...animations.wobble,
                  }}
                >
                  🖐
                </Typography>
              </Typography>

              <Typography
                sx={{
                  ...animations.slideRight,
                }}
                variant="h2"
              >
                I'm Mukesh Sudhan
              </Typography>
              <Typography
                color="primary"
                marginBottom={1}
                sx={{
                  ...animations.slideLeft,
                  
                }}
                variant="h6"
              >
                GRAPHIC DESIGNER
              </Typography>
              <Button
              
               variant="outlined" color="secondary">Book Appoinment</Button>
            </Box>
            <Avatar
              sx={{
                ...animations.scale,
                height: 250,
                width: 250,
              }}
              alt="profile"
              src="/profile.jpeg"
            />
          </Grid>
        </Grid>
      </Container>
    </Background>
  );
};

export default Home;
