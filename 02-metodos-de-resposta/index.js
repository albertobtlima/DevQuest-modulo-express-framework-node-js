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

app.get("/download", (req, res) => {
  res.download("gato.jpeg");
})

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000/");
});


// res.redirect()  =  envia uma resposta HTTP que redireciona para outra página.
// res.redirect('/users/ricardo');
// res.redirect('http://example.com');
// res.redirect(301, 'http://example.com');


// res.status() = define o código de status HTTP da resposta. 
// O método pode ser encadeado com outros métodos de resposta.
// return res.status(404).send("User not found");


// res.download() = esse método de Express.js é utilizado para enviar um arquivo para o cliente
// como uma resposta a uma requição HTTP.
