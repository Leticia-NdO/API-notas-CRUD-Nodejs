import Sequelize from 'sequelize';

// conexão com o banco de dados
const conn = new Sequelize('code_drops_crud', 'root', 'root', {
    host: "localhost",
    dialect: 'mariadb',
    query: {raw: true}
})

// autentificação da conexão com o banco de dados
conn.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!")
    }).catch(() => {
        console.error("Erro: Falha na conexão com o banco de dados.")
    })




// Usuarios.create({                      criação de um usuário
//     nome: 'Leticia',
//     sobrenome: 'Neves',
//     idade: 19,
//     email: 'dredredre48@gmail.com'
// })


//Postagem.sync({ force: true })          criação da tabela

//Usuarios.sync({force: true})            criação da tabela

export default conn