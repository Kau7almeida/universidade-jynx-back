import db from "../../connection.js"

const classesRepository = {

    async getAllClasses() {
        return await db`SELECT * FROM classes`
    },

    async createClasse(name, unit_id) {
        return await db`INSERT INTO classes (name, unit_id)
        VALUES(${name}, ${unit_id})`
    },

    async deleteClasse(id) {
        return await db`DELETE FROM classes WHERE id = ${id}`
    },

}

export default classesRepository