import { useState, useEffect } from "react";
import axios from "axios";
import DateRangeCalendarValue from "../components/DatePicker";

export default function CupertinoAPI() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const apiUrl = "https://api.pricelabs.co/v1/reservation_data?pms=airbnb";
    const API_KEY = import.meta.env.VITE_API_KEY;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
          "x-api-key": API_KEY,
        },
      })
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

        setReservations(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching reservations data:", error);
      });
  }, []);

  if (!reservations.length) {
    return <div>Loading...</div>;
  }

  return <DateRangeCalendarValue reservations={reservations} />;
}
