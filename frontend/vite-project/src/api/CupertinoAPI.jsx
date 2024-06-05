/* eslint-disable no-undef */
import React from "react"; 
import { useState, useEffect } from "react";
import axios from "axios";
import DateRangeCalendarValue from "../components/DatePicker";

export default function CupertinoAPI() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/reservation_data?pms=airbnb";

    axios
      .get(apiUrl)
      .then((response) => {
        let responseData = response.data;
        console.log("responseData", responseData.data);
        let filteredData = responseData.data.filter(
          (item) =>
            item.listing_name ===
            "SAN JOSE [ BELA] · Guest Unit Cupertino | Private Entrance | Kitchen"
        );

        filteredData.sort((a, b) =>
          a.listing_name.localeCompare(b.listing_name)
        );

        setReservations(filteredData);
        console.log(filteredData)
        console.log("Where are you console ninja?")
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!reservations.length) {
    return <div>Loading...</div>;
  }

  return <DateRangeCalendarValue reservations={reservations} />;
}
