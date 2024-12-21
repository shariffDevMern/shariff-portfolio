import { Box} from "@mui/material";

const Background = (props) => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/bgimg4.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "4px", // Width of the scrollbar
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#e4e4e4", // Scrollbar track color
            borderRadius: "10px", // Rounded corners for the track
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // Scrollbar thumb color
            borderRadius: "10px", // Rounded corners for the thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555", // Hover effect for the scrollbar thumb
          },
      }}
    >
      {props.children}
    </Box>
  );
};

export default Background;
