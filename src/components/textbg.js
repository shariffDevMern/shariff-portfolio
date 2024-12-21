const textBg = {
                backgroundColor: "rgba(255, 255, 255, 0.7)", // White translucent background
                backdropFilter: "blur(1px)", // Feathered blur effect
                borderRadius: "20px", // Rounded corners
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
                  filter: "blur(15px)",
}}

export default textBg