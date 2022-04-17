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
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: true
    },
})

// Post.sync({force: true})


export { Post }
