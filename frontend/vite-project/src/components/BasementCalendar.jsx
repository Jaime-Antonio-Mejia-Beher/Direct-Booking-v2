import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress, Typography } from "@mui/material";

const BasementCalendar = () => {
  const [calendarData, setCalendarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCalendarData = async () => {
      const apiKey = "YOUR_API_KEY";
      const apiUrl = "https://api.pricelabs.co/v1/calendar"; // Adjust the endpoint as needed

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        setCalendarData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching calendar data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCalendarData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography variant="body1">Error fetching data.</Typography>;

  return (
    <div>
      <Typography variant="h6">Basement Calendar Data</Typography>
      <pre>{JSON.stringify(calendarData, null, 2)}</pre>
    </div>
  );
};

export default BasementCalendar;
