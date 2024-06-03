import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <CssBaseline />
      <App />
  </React.StrictMode>
);
