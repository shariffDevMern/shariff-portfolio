import { Box, Container, Grid, Typography, Avatar, Button } from "@mui/material";
import animations from "./animations";
import textBg from "./textbg"; 

const Home = () => {
  return (
    
      <Container >
        <Grid paddingBottom={2} marginTop={"100px"} container>
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
                ...textBg
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
    
  );
};

export default Home;
