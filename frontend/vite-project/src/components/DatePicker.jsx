import { DateRange } from "react-date-range";
import { useState } from "react";

export default function DateRangeCalendarValue() {
 const [date, setDate] = useState([
   {
     startDate: new Date(),
     endDate: null,
     key: "selection",
   },
 ]);
console.log(date)

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setDate([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={date}
    />
  );
}
