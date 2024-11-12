const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`Requisição recebida em ${new Date()}`);
  next();
});

app.get("/users", (req, res) => {
  console.log("caiu na rota de usuários");
  res.send("caiu na rota de usuários");
});

app.get("/", (req, res) => {
  console.log("caiu na rota raiz");
  res.send("caiu na rota raiz");
});

app.listen(3000, () => {
  console.log("Servidor em execução http://localhost:3000");
});
