import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Link } from "react-router-dom";

const Accommodation = ({ description, img, link, price, city, images }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <ImageList sx={{ width: "100%", height: 300 }} cols={3} rowHeight={164}>
          {images.map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={image}
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
        <CardContent sx={{ padding: "12px 12px 0px 12px " }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ margin: "0", height: "60px" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 25px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="text.primary">
              {price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={link}
            >
              View Details
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Accommodation;
