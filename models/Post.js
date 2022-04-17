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

<<<<<<< HEAD
// Post.sync({force: true})
=======
//Post.sync({force: true})
>>>>>>> 13a79c977cb8ed6c5f504cb82708d45758c7b05c


export { Post }
