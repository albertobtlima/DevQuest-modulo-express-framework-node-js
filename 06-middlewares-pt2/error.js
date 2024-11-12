const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Do not funciona!");
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta http://localhost:3000");
});
