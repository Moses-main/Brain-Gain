const express = require("express");
const app = express();

const HOST = process.env.HOST;
const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to Brain Gain");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
