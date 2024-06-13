/* eslint-disable no-undef */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DateRangeCalendarValue from "../components/DatePicker";

export default function CupertinoAPI() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/reservation_data"; // This is the URL of the backend server

    axios
      .get(apiUrl)
      .then((response) => {
        let responseData = response.data;
        let filteredData = responseData.data.filter(
          (item) =>
            item.listing_name ===
            "SAN JOSE [ BELA] · Guest Unit Cupertino | Private Entrance | Kitchen"
        );

        filteredData.sort((a, b) =>
          a.listing_name.localeCompare(b.listing_name)
        );

        setReservations(filteredData); // This is the data that will be passed to the DateRangeCalendarValue component
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!reservations.length) {
    // If there are no reservations, display a message
    return <div>No reservations</div>;
  }
  // This is the DateRangeCalendarValue component that will display the reservations in DatePicker.jsx
  return <DateRangeCalendarValue reservations={reservations} />;
}
