const express = require("express")
const server = express()

//config pasta publica
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
  nunjucks.configure("src/views", {
    express: server,
    noCache: true
  })

//config rotas da aplicação - pag. inicial e rotas
server.get("/", (req, res) => {
  return res.render("index.html")
})
server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})
server.get("/serach", (req, res) => {
  return res.render("serach-results.html")
})

// ligar o servidor
server.listen(3000)