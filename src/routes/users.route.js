import userController from "../controllers/users.controller.js";

export default function usersRoutes(app) {

    app.get('/getAllUsers', (req, reply) => {
        try {
            return userController.getAllUsers()
        } catch (err) {
            reply.code(500).send('Erro na consulta dos usuários cadastrados' + err)
        }
    })

    app.post('/post', (req, reply) => {
        try {
            reply.code(201).send(userController.createUser(req))
        } catch (err) {
            reply.code(400).send('Erro ao cadastrar usuário' + err)
        }
    })

    app.delete('/delete/:id', (req, reply) => {
        try {
            reply.code(201).send(userController.deleteUser(req))
        } catch (err) {
            reply.code(400).send('Erro ao deletar usuário' + err)
        }
    })

}