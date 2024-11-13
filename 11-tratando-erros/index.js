const express = require("express");
const app = express();
const asyncHandler = require("express-async-handler");

app.get("/users/:id", asyncHandler(async (req, res) => {
    throw new Error("Erro de teste");
  })
);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Ocorreu um erro inesperado" });
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta http://localhost:3000");
});
