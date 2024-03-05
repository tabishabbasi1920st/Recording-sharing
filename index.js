const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("<h1>Server is running at port 5000</h1>");
});

app.listen(5000, () => {
  console.log("Serve is running at 5000");
});

app.post("/upload-recording", (req, res) => {
  const { recording } = req.body;

  if (recording) {
    const bufferedData = Buffer.from(recording, "base64");
    fs.writeFileSync(`recordings/${v4()}.wav`, bufferedData);
    console.log("recording saved successfully");
  }
});
