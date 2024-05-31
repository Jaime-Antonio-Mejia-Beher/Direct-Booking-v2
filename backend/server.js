const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const authRoutes = require("./api/auth");
const bookingRoutes = require("./api/bookings");

require("dotenv").config();

const app = express();

connectDB();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
