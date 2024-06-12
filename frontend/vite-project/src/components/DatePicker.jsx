/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "../index.css"; // Import your custom styles

export default function DateRangeCalendarValue({ setDates }) {
  const [date, setDate] = useState([
    {
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

  const handleDateChange = (item) => {
    setDate([item.selection]);
    setDates(item.selection);
  };

  return (
    <div className="calendar-container">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => handleDateChange(item)}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className="calendar"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
