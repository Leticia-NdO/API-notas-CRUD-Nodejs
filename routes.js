import pkg from 'express';
// import 'body-parser'
import { Post } from './models/Post.js'
const { Router } = pkg;


const routes = Router()

// visualização de todas as notas

routes.get('/', (req, res) => {
    Post.findAll({ order: [['createdAt', 'DESC']] }).then((notas) => {          // o que se recebe de Post.findAll() é um array de notas. Queremos, desse array, o titulo e o conteudo
        res.render('home', { notas: notas })                                    // res.render() recebe dois parâmetros: o primeiro é a página de destino, o outro é a constante que deve 
    })                                                                          // ser mandada pra lá, no caso, é um objeto que carrega a função notas (que contém todas as notas vindas de findAll())
})

// redirecionamento para a página de cadastro

routes.get('/cad', function (req, res) {
    res.render('formulario')                         // essa rota é simplesmente um redirecionamento
})

// o cadastro em si

routes.post('/add', (req, res) => {
    Post.create({                                    // lembre-se de que routes tem as propriedades do sequelize

        titulo: req.body.titulo,                     // as mesmas colunas da tebela postagens.
        conteudo: req.body.conteudo                  // os nomes após body são aqueles definidos em formulario.handlebars na propriedade name

    }).then(() => {
        res.redirect('/')

    }).catch((err) => {
        res.send('Erro ao criar anotação' + err)

    })
})

// deleção de um registro

routes.get('/deletar/:id', (req, res) => {

    const postID = req.params.id

    Post.destroy({
        where: {
            id: postID
        }
    }).then(function () {
        res.send('Nota deletada com sucesso!')

    }).catch((err) => {
        res.send('Erro ao deletar nota' + err)
    })
})

// redirecionamento para a página de busca

routes.get('/src', function (req, res) {
    res.render('buscar')
})

// a busca em si

routes.post('/buscar', (req, res) => {
    Post.findOne({
        where: {
            titulo: req.body.busca                            // onde o titulo é igual ao conteudo do campo input de nome 'busca'
        }
    }).then((nota) => {
        res.render('resultado_busca', { nota: nota })
    }).catch((err) => {
        res.send('Nota não encontrada' + err)
    })
})

// redirecionamento para a página de edição

routes.get('/editar/:id', (req, res) => {

    Post.findOne({
        where: {                 // é uma rota de redirecionamento, mas como eu queria que o formulário fosse pré-preenchido com os dados da nota a ser editada, 
            id: req.params.id                   // eu adicionei um findOne
        }
    }).then(function (nota) {
        res.render('editar', { nota: nota })
    })

})

// a edição em si

routes.post('/atualizar/:id', (req, res) => {

    Post.update(req.body, {
        where: {
            id: req.params.id

        }
    }).then(() => {
        res.redirect('/')

    }).catch((err) => {
        res.send('Erro ao atualizar nota')

        console.log(err)
    })
})


export { routes }