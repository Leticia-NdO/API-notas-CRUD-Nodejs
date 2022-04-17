import express from "express"
import conn from './db.mjs' // importar a conexão com o banco de dados para que o nodemon o processe
import { engine } from "express-handlebars"
import { routes } from "./routes.js"  // importanto as rotas
import bodyParser from 'body-parser'
import { Post } from "./models/Post.js"
import fileUpload from 'express-fileupload'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const app = express()


//Config
    // Template Engine
        app.engine('handlebars', engine({ defaultLayout: 'main' }))  // definindo o handlebars como a nossa template engine padrão
        app.set('view engine', 'handlebars')

    // Static foldes

// File uploader
app.use(fileUpload())
app.use(express.static('uploads'))
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

export {__dirname}

// servidor
app.use(routes)
app.listen(6081, () => { console.log('Server is running! Open http://localhost:6081/ to see results') })
