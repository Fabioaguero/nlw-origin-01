const express = require("express")
const server = express()

//pegar o banco de dados 
const db = require("./database/db")

//config pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicaçao
server.use(express.urlencoded({ extended: true }))

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
  //pegar as informações do formulario 

  console.log(req.query)
  return res.render("create-point.html")
})

//criar uma rota post para envio das informaçoes do formulario sem mostrar o conteudo
server.post("/savepoint", (req, res) => {

   const query = `
         INSERT INTO places (
             image, 
             name, 
             address, 
             address2,
             state,
             city,
             items
         ) VALUES (?,?,?,?,?,?,?);
         `

         const values = [
           req.body.image,
           req.body.name,
           req.body.address,
           req.body.address2,
           req.body.state,
           req.body.city,
           req.body.items
        ]

        //função callback para ser executada depois que os dados forem inseridos na tabela
      function afterInsertData(err) {
         if(err) {
              console.log(err) 
              return res.send("Erro no cadastro")
         }

         console.log("Cadastrado com sucesso")
         console.log(this)

         return res.render("create-point.html", {saved: true})
     }

     db.run(query, values, afterInsertData ) //comando para inserir novos campos no banco de dados

  
})


server.get("/serach", (req, res) => {
  const serach = req.query.serach

  if (serach == "") {
    //pesquisa vazia retorna 
    return res.render("serach-results.html", { total: 0 })
  }


  //pegar os dados do banco de dados 
  db.all(`SELECT * FROM places WHERE city LIKE '%${serach}%'`, function(err, rows) {
           if(err) {
               return console.log(err) 
           }

           const total = rows.length
    
        //   console.log("Aqui esta seus registro")
        //   console.log(rows)

           //mostrar a página html com os dados do banco de dados
           return res.render("serach-results.html", { places: rows, total })
       })
  
})

// ligar o servidor
server.listen(3000)