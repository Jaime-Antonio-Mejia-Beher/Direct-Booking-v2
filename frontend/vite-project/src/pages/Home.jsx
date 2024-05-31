import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import accommodations from "../data/accommodationsData";

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          OUR ACCOMMODATION OPTIONS
        </Typography>
        {accommodations.map((accommodation) => (
          <Card key={accommodation.id} sx={{ my: 2 }}>
            <CardMedia
              component="img"
              alt={accommodation.description}
              height="300"
              image={accommodation.img}
              title={accommodation.description}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {accommodation.city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {accommodation.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                component={Link}
                to={accommodation.link}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
