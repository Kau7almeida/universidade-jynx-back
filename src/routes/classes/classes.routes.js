import classesController from "../../controllers/classes/classes.controller.js"

export default function classesRoutes(app) {

    app.get('/getAllClasses', (req, reply) => {
        try {
            return classesController.getAllClasses()
        } catch (err) {
            reply.code(500).send('Erro na consulta dos usuários cadastrados' + err)
        }
    })

    app.post('/post', (req, reply) => {
        try {
            reply.code(201).send(classesController.createClasse(req))
        } catch (err) {
            reply.code(400).send('Erro ao cadastrar usuário' + err)
        }
    })

    app.delete('/deleteClasse/:id', (req, reply) => {
        try {
            reply.code(201).send(classesController.deleteClasse(req))
        } catch (err) {
            reply.code(400).send('Erro ao deletar usuário' + err)
        }
    })

}