import notebookController from "../../controllers/notebooks/notebook.controller.js"

export default function notebookRoutes(app) {

    app.get('/getAllNotebooks', (req, reply) => {
        try {
            return notebookController.getAllNotebooks()
        } catch (err) {
            reply.code(500).send('Erro na consulta dos usuários cadastrados' + err)
        }
    })

    app.post('/post', (req, reply) => {
        try {
            reply.code(201).send(notebookController.createNotebook(req))
        } catch (err) {
            reply.code(400).send('Erro ao cadastrar usuário' + err)
        }
    })

    app.put('/put/:id', (req, reply) => {
        try {
            reply.code(201).send(notebookController.updateNotebook(req))
        } catch (err) {
            reply.code(400).send('Erro ao cadastrar usuário' + err)
        }
    })

    app.delete('/deleteNotebook/:id', (req, reply) => {
        try {
            reply.code(201).send(notebookController.deleteNotebook(req))
        } catch (err) {
            reply.code(400).send('Erro ao deletar usuário' + err)
        }
    })

}