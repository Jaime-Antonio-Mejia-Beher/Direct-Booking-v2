import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const GuestReviews = ({ reviews = [] }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Guest Reviews
      </Typography>
      {reviews.map((review, index) => (
        <Paper key={index} sx={{ padding: 2, marginBottom: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={review.avatar}
              alt={review.name}
              sx={{ marginRight: 2 }}
            />
            <Box>
              <Typography variant="h6">{review.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {review.city}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
            <Rating
              name="read-only"
              value={5}
              readOnly
              precision={0.5}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={
                <StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />
              }
              sx={{ marginRight: 1 }}
            />
            <Typography variant="body1" color="textSecondary">
              {review.date}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {review.comment}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default GuestReviews;
