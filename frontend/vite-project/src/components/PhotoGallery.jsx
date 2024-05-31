import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const PhotoGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: "100%", height: 450 }} cols={3} rowHeight={164}>
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
          />
          <ImageListItemBar
            title={`Gallery image ${index + 1}`}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotoGallery;
