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
  res.sendFile(__dirname + "/views/index.html")
})
server.get("/create-point", (req, res) => {
  res.sendFile(__dirname + "/views/create-point.html")
})
server.get("/serach-results", (req, res) => {
  res.sendFile(__dirname + "/views/serach-results.html")
})

// ligar o servidor
server.listen(3000)