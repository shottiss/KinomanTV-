// Пример backend-кода (например, Express.js)
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend for movie site");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
