import { Box, Toolbar } from "@mui/material";

const Background = (props) => {
  return (
    <Box
      sx={{
        p: 3,
        backgroundImage: `url('/bgimg4.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Toolbar />
      <Box
        sx={{
          height: "80vh",
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
    </Box>
  );
};

export default Background;
