// server.js
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/' , (req, res) => {   res.send('Hello World!'); });

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.pricelabs.co",
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader("Accept", "application/json");
      proxyReq.setHeader("X-API-Key", process.env.API_KEY);
      console.log(`Final API URL: ${proxyReq.getHeader('host')}${req.url}`);
      console.log("hello world");
    },
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
