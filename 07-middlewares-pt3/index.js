const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.post("/cookies", (req, res) => {
  res.cookie("nome", "Bozo").send("cookies definidos com sucesso");
});

app.get("/cookies", (req, res) => {
  console.log(req.cookies);
  res.send("pegando os cookies");
});

app.listen(3000, () => {
  console.log("Servidor iniciado em http://localhost:3000");
});
