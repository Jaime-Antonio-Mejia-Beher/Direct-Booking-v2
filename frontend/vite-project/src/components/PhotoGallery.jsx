import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const photos = [
  {
    title: "Patio Area",
    img: "https://cobosproperties.com/wp-content/uploads/sites/9/2023/05/Mystic-Moon-Final-4916.jpg",
    link: "https://cobosproperties.com/portfolio/gallery-8/",
  },
  {
    title: "Bedroom Area",
    img: "https://cobosproperties.com/wp-content/uploads/sites/9/2023/05/Mystic-Moon-Final-2775.jpg",
    link: "https://cobosproperties.com/portfolio/gallery-7/",
  },
  {
    title: "Kitchen and Dining Area",
    img: "https://cobosproperties.com/wp-content/uploads/sites/9/2023/05/Mystic-Moon-Final-9.jpg",
    link: "https://cobosproperties.com/portfolio/gallery-6/",
  },
  {
    title: "Living Area",
    img: "https://cobosproperties.com/wp-content/uploads/sites/9/2023/05/Mystic-Moon-Final-2390.jpg",
    link: "https://cobosproperties.com/portfolio/gallery-5/",
  },
];

const PhotoGallery = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        PHOTO GALLERY
      </Typography>
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={3} key={photo.title}>
            <Card>
              <CardMedia
                component="img"
                alt={photo.title}
                height="140"
                image={photo.img}
                title={photo.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {photo.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PhotoGallery;
