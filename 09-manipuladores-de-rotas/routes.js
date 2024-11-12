const express = require("express");
const userRouter = express.Router();

const router = userRouter
  .get("/", (req, res) => {
    res.send("Lista de livros");
  })
  .post("/", (req, res) => {
    res.send("Novo livro adicionado");
  });

module.exports = router;
