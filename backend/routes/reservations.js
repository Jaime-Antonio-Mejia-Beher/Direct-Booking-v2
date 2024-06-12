import express from "express";
import {
  createReservation,
  viewReservation,
  cancelReservation,
  sendInvoice,
} from "../controllers/reservationController";

const router = express.Router();

router.post("/", createReservation);
router.post("/view", viewReservation);
router.post("/cancel", cancelReservation);
router.post("/send-invoice", sendInvoice);

export default router;
