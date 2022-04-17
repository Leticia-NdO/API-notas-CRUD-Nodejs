import Sequelize from 'sequelize';

// conexão com o banco de dados
<<<<<<< HEAD
const conn = new Sequelize('nodejs_notas', 'root', 'root', {
    host: "localhost",
    dialect: 'mariadb',
=======
const conn = new Sequelize('nome do banco de dados', 'usuario', 'senha', {
    host: "",
    dialect: '',
>>>>>>> 13a79c977cb8ed6c5f504cb82708d45758c7b05c
    query: {raw: true}
})

// autentificação da conexão com o banco de dados
conn.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!")
    }).catch(() => {
        console.error("Erro: Falha na conexão com o banco de dados.")
    })

<<<<<<< HEAD
export default conn
=======
export default conn
>>>>>>> 13a79c977cb8ed6c5f504cb82708d45758c7b05c
