import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="/college-photo.jpg" title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Panimalar Institute of Technology
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          B.Tech, Information Technology
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          'GPA 8.7/10'
        </Typography>
        <Typography variant="subtitle2">Jun 2020 - April 2024</Typography>
      </CardContent>
    </Card>
  );
}
