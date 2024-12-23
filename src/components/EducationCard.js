import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="/jnn.jpeg" title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          J.N.N Institute of Engineering
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Bachelor's degree, Computer Science
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          'Grade A'
        </Typography>
        <Typography variant="subtitle2">Aug 2020 - Jun 2024</Typography>
      </CardContent>
    </Card>
  );
}
