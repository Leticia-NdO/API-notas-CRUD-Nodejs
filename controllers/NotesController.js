import { Post } from "../models/Post.js"
import { __dirname } from "../app.js"
import path from 'path'



// controller

class NotesController {

    homeRender(req, res) {
        Post.findAll({ order: [['createdAt', 'DESC']] }).then((notas) => {          // o que se recebe de Post.findAll() é um array de notas. Queremos, desse array, o titulo e o conteudo
            res.render('home', { notas: notas })                                    // res.render() recebe dois parâmetros: o primeiro é a página de destino, o outro é a constante que deve 
        })                                                                          // ser mandada pra lá, no caso, é um objeto que carrega a função notas (que contém todas as notas vindas de findAll())
    }

    formRender(req, res) {
        res.render('formulario')                         // essa rota é simplesmente um redirecionamento
    }

    create(req, res) {

        console.log(req.files)
        const imagem = req.files.imagem // nome do input
        const nomeImagem = Date.now()+path.extname(imagem.name)
        const uploadPath = __dirname + "/uploads/" + nomeImagem

        imagem.mv(uploadPath, (err) => {
            if (err) return res.status(500).send(err)

            Post.create({                                    // lembre-se de que routes tem as propriedades do sequelize

                titulo: req.body.titulo,                     // as mesmas colunas da tebela postagens.
                conteudo: req.body.conteudo,                  // os nomes após body são aqueles definidos em formulario.handlebars na propriedade name
                imagem: nomeImagem

            }).then(() => {
                res.redirect('/')
    
            }).catch((err) => {
                res.send('Erro ao criar anotação' + err)
                
                this.formRender()
    
            })
        
        })


    }



    delete(req, res) {

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
    }


    findOne(req, res) {
        Post.findOne({
            where: {
                titulo: req.body.busca                            // onde o titulo é igual ao conteudo do campo input de nome 'busca'
            }
        }).then((nota) => {
            res.render('resultado_busca', { nota: nota })
        }).catch((err) => {
            res.send('Nota não encontrada' + err)
        })
    }

    editRender(req, res) {

        Post.findOne({
            where: {                 // é uma rota de redirecionamento, mas como eu queria que o formulário fosse pré-preenchido com os dados da nota a ser editada, 
                id: req.params.id                   // eu adicionei um findOne
            }
        }).then(function (nota) {
            res.render('editar', { nota: nota })
        })

    }

    update(req, res) {

        const imagem = req.files.imagem // nome do input
        const nomeImagem = Date.now()+path.extname(imagem.name)
        const uploadPath = __dirname + "/uploads/" + nomeImagem

        imagem.mv(uploadPath, (err) => {
            if (err) return res.status(500).send(err)
        
            Post.update({
                titulo: req.body.titulo, 
                conteudo: req.body.conteudo, 
                imagem: nomeImagem
            },{
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
    }

}

export default new NotesController()