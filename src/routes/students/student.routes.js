import studentController from "../../controllers/students/studentcontroller.js"

export default function studentRoutes(app) {

    app.get('/getAllStudents', (req, reply) => {
        try {
            return studentController.getAllStudents()
        } catch (err) {
            reply.code(500).send('Erro na consulta dos usuários cadastrados' + err)
        }
    })

    app.post('/post', (req, reply) => {
        try {
            reply.code(201).send(studentController.createStudent(req))
        } catch (err) {
            reply.code(400).send('Erro ao cadastrar usuário' + err)
        }
    })

    app.delete('/deleteStudent/:id', (req, reply) => {
        try {
            reply.code(201).send(studentController.deleteStudent(req))
        } catch (err) {
            reply.code(400).send('Erro ao deletar usuário' + err)
        }
    })

}