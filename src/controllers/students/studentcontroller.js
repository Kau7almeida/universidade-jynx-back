import studentsRepository from "../../repositorys/students/student.repository.js"

const studentController = {

    async getAllStudents() {

        return await studentsRepository.getAllStudents()
        
    },

    async createStudent(req) {

        try {

            const { name, phone, email, cpf, classe_id } = req.body

            await studentsRepository.createStudent(
                name,
                phone,
                email,
                cpf,
                classe_id
            )

            return { 'message': 'success' }

        } catch (e) {

            return { 'message': 'error' }

        }

    },

    async deleteStudent(req) {

        const { id } = req.params

        return await studentsRepository.deleteStudent(id)

    }

}

export default studentController