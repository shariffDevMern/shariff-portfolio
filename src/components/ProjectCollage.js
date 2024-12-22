import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import scrollstyles from "./scrollstyles";
import animations from "./animations";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: 384, ...scrollstyles }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
        sx={{
          "&:hover": {
            ...animations.pulsate
          },
        }}
          key={item.title}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/project1.jpeg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "/project2.jpeg",
    title: "Burger",
  },
  {
    img: "/project3.jpeg",
    title: "Camera",
  },
  {
    img: "/project4.jpeg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "/project5.jpeg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "/project6.jpeg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "/project7.jpeg",
    title: "Basketball",
  },
  {
    img: "/project8.jpeg",
    title: "Fern",
  },
  {
    img: "/project9.jpeg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "/project10.jpeg",
    title: "Tomato basil",
  },
  {
    img: "/project1.jpeg",
    title: "Sea star",
  },
  {
    img: "/project2.jpeg",
    title: "Bike",
    cols: 2,
  },
];
