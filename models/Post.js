import conn from '../db.mjs'
import Sequelize from 'sequelize';

const Post = conn.define('postagens', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    conteudo: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})



// const Usuarios = conn.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }

// })

export { Post }
