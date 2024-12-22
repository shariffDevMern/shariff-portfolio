import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import animations from "./animations";
import textBg from "./textbg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
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
              ...textBg,
            }}
          >
            <Box sx={{display:"flex",alignItems:'center',gap:2}}>
              <Typography color="secondary" variant="h1" component={"h1"}>
                Hello{" "}
              </Typography>
              <Typography
                variant="h2"
                component={"h2"}
                sx={{
                  ...animations.wobble,
                }}
              >
                🖐
              </Typography>
            </Box>

            <Typography
              component={"h3"}
              sx={{
                ...animations.slideRight,
              }}
              variant="h2"
            >
              I'm Mukesh Sudhan
            </Typography>
            <Typography
              component={"h5"}
              color="primary"
              marginBottom={1}
              sx={{
                ...animations.slideLeft,
              }}
              variant="h6"
            >
              GRAPHIC DESIGNER
            </Typography>
            <Button onClick={()=>{
              navigate('/contact',{replace:true})
            }} variant="outlined" color="secondary">
              Book Appoinment
            </Button>
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
