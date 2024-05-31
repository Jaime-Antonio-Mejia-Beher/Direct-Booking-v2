import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const createBooking = (bookingData) =>
  API.post("/bookings", bookingData);
export const registerUser = (userData) => API.post("/auth/register", userData);
