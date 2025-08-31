import db from "../../connection.js"

const studentsRepository = {

    async getAllStudents() {
        return await db`SELECT * FROM students`
    },

    async createStudent(name, phone, email, cpf, classe_id) {
        return await db`INSERT INTO students (name, phone, email, cpf, classe_id)
        VALUES(${name}, ${phone}, ${email}, ${cpf}, ${classe_id})`
    },

    async deleteStudent(id) {
        return await db`DELETE FROM students WHERE id = ${id}`
    },

}

export default studentsRepository