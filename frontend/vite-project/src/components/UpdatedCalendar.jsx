import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range"; 

const UpdatedCalendar = () => { // Wrap the code inside a functional component
    const [state, setState] = useState({
        selection1: {
            startDate: addDays(new Date(), 1),
            endDate: null,
            key: "selection1",
        },
        selection2: {
            startDate: addDays(new Date(), 4),
            endDate: addDays(new Date(), 8),
            key: "selection2",
        },
        selection3: {
            startDate: addDays(new Date(), 8),
            endDate: addDays(new Date(), 10),
            key: "selection3",
            autoFocus: false,
        },
    });

    return (
        <DateRangePicker
            onChange={(item) => setState({ ...state, ...item })}
            ranges={[state.selection1, state.selection2, state.selection3]}
        />
    );
};

export default UpdatedCalendar; // Export the functional component
