import { DateRange } from "react-date-range";
import { useState } from "react";
import "../index.css"; // Import your custom styles

export default function DateRangeCalendarValue() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

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
