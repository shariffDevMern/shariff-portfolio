import { Container, Grid, Typography } from "@mui/material"
import QuiltedImageList from "./ProjectCollage"
import textBg from "./textbg"
import animations from "./animations"

const Projects = () =>{

    return(<Container sx={{marginY:2,...textBg,...animations.fade}}>
        <Typography sx={{...animations.slideLeft}} variant="h2" color="secondary">Projects</Typography>
        <Grid  container> 
            <Grid sx={{...animations.slideRight}} item xs={12} md={6} >
        <img style={{width:'100%',height: {xs:300,md:380,}}} src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt=''/>
            </Grid>
            <Grid sx={{...animations.slideLeft}} xs={12} md={6}>
            <QuiltedImageList/>
            </Grid>
        
        </Grid>
        
    </Container>)

}

export default Projects