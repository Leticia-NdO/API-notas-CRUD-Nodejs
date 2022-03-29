import express from "express"
import conn from './db.mjs' // importar a conexão com o banco de dados para que o nodemon o processe
import { engine } from "express-handlebars"
import { routes } from "./routes.js"  // importanto as rotas
import bodyParser from 'body-parser'
import { Post } from "./models/Post.js"
const app = express()


//Config
    // Template Engine
        app.engine('handlebars', engine({ defaultLayout: 'main' }))  // definindo o handlebars como a nossa template engine padrão
        app.set('view engine', 'handlebars')

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// servidor
app.use(routes)
app.listen(6081, () => { console.log('Server is running! Open http://localhost:6081/ to see results') })
