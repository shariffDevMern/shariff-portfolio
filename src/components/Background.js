import { Box, Toolbar} from "@mui/material"

const Background = (props) =>{
    return(<Box sx={{ p: 3,backgroundColor:"#c7d586",
        minHeight:"100vh", }}>
        <Toolbar />
        {props.children}
        
      </Box>)
}

export default Background