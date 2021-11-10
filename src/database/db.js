// importar a depedencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados, para nossas operações
//  db.serialize(() => {
    //criar tabela no banco de dados com comandos SQL
    // db.run(`
    // CREATE TABLE IF NOT EXISTS places (
        // id INTEGER PRIMARY KEY AUTOINCREMENT,
        // image TEXT,
        // name TEXT,
        // address TEXT,
        // address2 TEXT,
        // state TEXT,
        // city TEXT,
        // items TEXT
    //   );
    // `)

    //inserir dados na tabela no banco de dados
    // const query = `
        // INSERT INTO places (
            // image, 
            // name, 
            // address, 
            // address2,
            // state,
            // city,
            // items
        // ) VALUES (?,?,?,?,?,?,?);
        // `

        // const values = [
            // "https://cdn.pixabay.com/photo/2018/10/13/12/47/recycling-3744181__340.jpg",
            // "Papersider",
            // "Guilherme Gemballa, Jardim América",
            // "Número 260",
            // "Santa Catarina",
            // "Rio do Sul",
            // "Papéis e Papelões"
        // ]

        //função callback para ser executada depois que os dados forem inseridos na tabela
    // function afterInsertData(err) {
        // if(err) {
            // return console.log(err) 
        // }

        // console.log("Cadastrado com sucesso")
        // console.log(this)
    // }

    // db.run(query, values, afterInsertData ) //comando para inserir novos campos no banco de dados


    //consultar os dados da tabela no banco de dados
 //   db.all(`SELECT * FROM places`, function(err, rows) {
 //       if(err) {
 //           return console.log(err) 
 //       }
 //
 //       console.log("Aqui esta seus registro")
 //       console.log(rows)
 //   })


    //deletar dados da tabela no banco de dados 
  //  db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
  //      if(err) {
  //          return console.log(err) 
  //      }
  //
  //      console.log("Registro deletado com sucesso!")
  //  })


    


// })