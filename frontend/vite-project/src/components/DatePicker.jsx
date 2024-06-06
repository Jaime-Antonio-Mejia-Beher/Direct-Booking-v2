/* eslint-disable react/prop-types */
import React from "react";
import { DateRange } from "react-date-range";
import { useState, useEffect } from "react";
import "../index.css"; // Import your custom styles

export default function DateRangeCalendarValue() {
  // console.log("DateRangeCalendarValue checkIn:", checkIn);
  // console.log("DateRangeCalendarValue checkOut:", checkOut);
  const [date, setDate] = useState([
    {
      //startDate: new Date(checkIn),
      //endDate: new Date(checkOut),
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    setDate([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
  }, []);
  // console.log("DateRangeCalendarValue date:", date);

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
