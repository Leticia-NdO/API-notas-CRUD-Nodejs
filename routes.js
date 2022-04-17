import pkg from 'express';
// import 'body-parser'
import { Post } from './models/Post.js'
const { Router } = pkg;
import NotesController from './controllers/NotesController.js';


const routes = Router()

// visualização de todas as notas

routes.get('/', NotesController.homeRender)

// redirecionamento para a página de cadastro

routes.get('/cad', NotesController.formRender)

// o cadastro em si

routes.post('/add', NotesController.create)

// deleção de um registro

routes.get('/deletar/:id', NotesController.delete)

// a busca em si

routes.post('/buscar', NotesController.findOne)

// redirecionamento para a página de edição

routes.get('/editar/:id', NotesController.editRender)

// a edição em si

routes.post('/atualizar/:id', NotesController.update)


export { routes }