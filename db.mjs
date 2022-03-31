import Sequelize from 'sequelize';

// conexão com o banco de dados
const conn = new Sequelize('nome do banco de dados', 'usuario', 'senha', {
    host: "",
    dialect: '',
    query: {raw: true}
})

// autentificação da conexão com o banco de dados
conn.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!")
    }).catch(() => {
        console.error("Erro: Falha na conexão com o banco de dados.")
    })

export default conn
