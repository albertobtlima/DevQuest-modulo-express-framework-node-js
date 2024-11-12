const express = require("express");
const app = express();

app.use((req, res, next) => {
  const isLogged = true;

  if (isLogged) {
    next();
  } else {
    res.status(401).send("Você precisa estar logado para acessar a página");
  }
});

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta http://localhost:3000");
});
