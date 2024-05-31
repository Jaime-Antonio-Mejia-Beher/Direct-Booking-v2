import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
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
        <Grid container spacing={4}>
          {accommodations.map((accommodation) => (
            <Grid item xs={12} sm={6} md={4} key={accommodation.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={accommodation.description}
                  height="300"
                  image={accommodation.img}
                  title={accommodation.description}
                />
                <CardContent sx={{height: "80px"}}>
                  <Typography variant="body1" color="text.secondary">
                    {accommodation.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0px 10px'}} >
                  <Typography gutterBottom variant="h5" component="div">
                    {accommodation.city}
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={accommodation.link}
                    >
                    View Details
                  </Button>
                    </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
