// server.js
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
//import { createProxyMiddleware } from "http-proxy-middleware";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/reservation_data", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.pricelabs.co/v1/reservation_data?pms=airbnb&start_date=2022-05-01&end_date=2026-06-10`,
      {
        headers: {
          "X-API-Key": process.env.API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

/*app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.pricelabs.co",
    changeOrigin: true,
    pathRewrite: { "^/api": "/v1" },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader("Accept", "application/json");
      proxyReq.setHeader("X-API-Key", process.env.API_KEY);
      console.log(`Final API URL: ${proxyReq.getHeader("host")}${req.url}`);
      console.log("hello world");
    },
  })
);
*/

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
