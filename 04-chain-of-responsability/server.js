// Middleware que verifica se o usuário é administrador
const checkAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next(); // passa para o próximo middleware
  } else {
    // aqui dá pra falar que dá pra concatenar o metodo status com o send na mesma linha
    res.status(403).send("Você não tem permissão para acessar esta página!");
  }
};

// Middleware que verifica se o usuário está autenticado
const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next(); // passa para o próximo middleware
  } else {
    res.status(401).send("Você precisa estar logado para acessar esta página!");
  }
};

// Rota protegida por permissões
app.get("/admin", checkAuth, checkAdmin, (req, res) => {
  res.send("Bem-vindo à página de administração!");
});
