import Reservation from "../models/Reservation";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const createReservation = async (req, res) => {
  const { name, email, phone, guests, checkIn, checkOut, accommodationId } =
    req.body;

  try {
    const token = crypto.randomBytes(20).toString("hex");
    const reservation = new Reservation({
      name,
      email,
      phone,
      guests,
      checkIn,
      checkOut,
      accommodationId,
      token,
    });

    await reservation.save();

    // Send confirmation email with secure link
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Reservation Confirmation",
      text: `Thank you for your reservation! Please use the following link to view or manage your reservation: ${process.env.CLIENT_URL}/manage-reservation?token=${token}&email=${email}`,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(201)
      .json({ msg: "Reservation created and confirmation email sent" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const viewReservation = async (req, res) => {
  const { token, email } = req.body;

  try {
    const reservation = await Reservation.findOne({ email, token });
    if (!reservation) {
      return res.status(404).json({ msg: "Reservation not found" });
    }

    res.json(reservation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const cancelReservation = async (req, res) => {
  const { token, email } = req.body;

  try {
    const reservation = await Reservation.findOneAndDelete({ email, token });
    if (!reservation) {
      return res.status(404).json({ msg: "Reservation not found" });
    }

    res.json({ msg: "Reservation cancelled" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Endpoint to manually trigger invoice creation
export const sendInvoice = async (req, res) => {
  const { reservationId } = req.body;

  try {
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({ msg: "Reservation not found" });
    }

    reservation.amount = calculateReservationAmount(reservation);
    reservation.quickbooksCustomerId = await getQuickBooksCustomerId(
      reservation.email
    );
    await createAndSendInvoice(reservation);

    res.status(200).json({ msg: "Invoice created and sent successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
