import { Box} from "@mui/material";
import scrollstyles from "./scrollstyles";

const Background = (props) => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/bgimg4.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflowY: "auto",
        ...scrollstyles
      }}
    >
      {props.children}
    </Box>
  );
};

export default Background;
