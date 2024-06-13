import React, { useState, useEffect } from "react";
import axios from "axios";
import DateRangeCalendarValue from "./DateRangeCalendarValue";

function ParentComponent() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.pricelabs.co/v1/reservation_data?pms=igms&start_date=2020-01-01&end_date=2020-01-10&limit=100&offset=0&page=1"
      )
      .then((response) => {
        // Assuming you're interested in the first reservation
        const firstReservation = response.data.data[0];
        setCheckIn(firstReservation.check_in);
        setCheckOut(firstReservation.check_out);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Render the DateRangeCalendarValue component with the fetched dates
  return (
    <div>
      {checkIn && checkOut ? (
        <DateRangeCalendarValue checkIn={checkIn} checkOut={checkOut} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ParentComponent;
