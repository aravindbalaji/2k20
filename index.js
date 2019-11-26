const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("2k20");
});

app.listen(port, () => {
  console.log("Listening on the port...", port);
});
