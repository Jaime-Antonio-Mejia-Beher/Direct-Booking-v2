import express from "express";
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  const { name, email, checkIn, checkOut } = req.body;
  try {
    const booking = new Booking({ name, email, checkIn, checkOut });
    await booking.save();
    res.status(201).json({ message: "Booking created", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
