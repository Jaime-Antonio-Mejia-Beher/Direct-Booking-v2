import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import Accommodation from "../components/Accommodation";

const accommodations = [
  {
    title: "1 bedroom 1 bath",
    description: "Ping-Pong | King Bed | DIA Airport  Kitchenette | Private | Denver, CO",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAxNTcyNzk%3D/original/38fd4c60-4fc6-4c38-af85-2be319f100df.png?im_w=960",
    link: "",
    price: "$99",
    city: "Denver, CO",
  },
  {
    title: "4 bedroom 3 bath",
    description: "Low Cleaning Fee | DIA Airport | Patio  Denver, CO",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-694925671710075642/original/572adddb-a2c1-4901-81e4-13c64f7cbe86.png?im_w=320",
    link: "https://a0.muscache.com/im/pictures/miso/Hosting-694925671710075642/original/572adddb-a2c1-4901-81e4-13c64f7cbe86.png?im_w=320",
    price: "$99",
    city: "Cupertino, CA",
  },
  {
    title: "1 bedroom 1 bath",
    description: "Private Unit | Full Kitchen | King Bed  Cupertino, CA ",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-29826475/original/4d93439c-5d4a-42ef-ae4f-66eaab75ac04.png?im_w=960",
    link: "",
    price: "$99",
    city: "Cupertino, CA",
  },
];

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
              key={accommodation.title}
              title={accommodation.title}
              description={accommodation.description}
              img={accommodation.img}
              link={accommodation.link}
              price={accommodation.price}
              city={accommodation.city}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
