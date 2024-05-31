import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const Accommodation = ({ title, description, img, link, price, city }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="300"
          image={img}
          title={title}
        />
        <CardContent sx={{ padding: "12px 12px 0px 12px " }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ margin: "0" }}
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
            <Button variant='contained' color="primary" href={link}>
              View Details
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Accommodation;
