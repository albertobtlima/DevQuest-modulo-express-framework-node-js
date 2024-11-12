const express = require("express");
const app = express();

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Bob Smith" },
];

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  return res.json(user);
});

server.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000/");
});
