import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const GuestReviews = ({ reviews }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Guest Reviews
      </Typography>
      {reviews.map((review, index) => (
        <Paper
          key={index}
          sx={{
            padding: 2,
            marginBottom: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={review.avatar}
            alt={review.name}
            sx={{ marginRight: 2 }}
          />
          <Box>
            <Typography variant="h6">{review.name}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Typography variant="body1" color="textSecondary">
                {review.date}
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                precision={0.5}
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={
                  <StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />
                }
                sx={{ marginLeft: 1 }}
              />
            </Box>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {review.comment}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default GuestReviews;
