/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";
import { useState, useEffect } from "react";
import "../index.css"; // Import your custom styles

export default function DateRangeCalendarValue({ checkIn, checkOut }) {
    console.log("DateRangeCalendarValue checkIn:", checkIn);
    console.log("DateRangeCalendarValue checkOut:", checkOut);
  const [date, setDate] = useState([
    {
      startDate: new Date(checkIn),
      endDate: new Date(checkOut),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setDate([
      {
        startDate: new Date(checkIn),
        endDate: new Date(checkOut),
        key: "selection",
      },
    ]);
  }, [checkIn, checkOut]);
  console.log("DateRangeCalendarValue date:", date);
  
  return (
    <div className="calendar-container">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className="calendar"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
