import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function MediaCard(props) {
  const { projectData } = props;
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={projectData.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectData.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {projectData.description}
        </Typography>
        <Typography variant="subtitle2">
          Technologies used: {projectData.skills.map((skill) => `${skill}, `)}
        </Typography>
        <Link href={projectData.link}>Project link</Link>
      </CardContent>
    </Card>
  );
}
