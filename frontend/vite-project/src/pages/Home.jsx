import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import Accommodation from "../components/Accommodation";
import accommodations from "../data/accommodationsData";

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          OUR ACCOMMODATION OPTIONS
        </Typography>
        <Grid container spacing={2}>
          {accommodations.map((accommodation) => (
            <Accommodation
              key={accommodation.id}
              description={accommodation.description}
              img={accommodation.img}
              link={accommodation.link}
              price={accommodation.price}
              city={accommodation.city}
              images={accommodation.images}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
