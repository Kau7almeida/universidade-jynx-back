import callsController from "../controllers/call.controller.js"

export default function callRoutes(app) {

    app.get('/getAllCall', (req, reply) => {
        try {
            return callsController.getAllCall()
        } catch (err) {
            reply.code(500).send('Erro na consulta dos usuários cadastrados' + err)
        }
    })

    app.post('/post', (req, reply) => {
        try {
            reply.code(201).send(callsController.createCall(req))
        } catch (err) {
            reply.code(400).send('Erro ao cadastrar usuário' + err)
        }
    })

    app.delete('/delete', (req, reply) => {
        try {
            reply.code(201).send(callsController.deleteAllCalls(req))
        } catch (err) {
            reply.code(400).send('Erro ao deletar usuário' + err)
        }
    })

    app.delete('/deleteCalls/:id', (req, reply) => {
        try {
            reply.code(201).send(callsController.deleteCall(req))
        } catch (err) {
            reply.code(400).send('Erro ao deletar usuário' + err)
        }
    })

}