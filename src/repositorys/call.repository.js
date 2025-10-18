import db from "../connection.js"

const callRepository = {

    async getAllCall() {
        // return await db`
        // SELECT 
        // c.id,
        // c.name,
        // c.classe_id,
        // cl.name AS turma
        // FROM call c
        // JOIN classes cl ON c.classe_id = cl.classe_id`

        return await db`SELECT * FROM call`
    },

    async createCall(name, classe) {
        // return await db`INSERT INTO call (name, classe_id)
        // VALUES(${name}, ${classe})`

        return await db`INSERT INTO call (name)
        VALUES(${name})`
    },

    async deleteAllCalls(id) {
        return await db`DELETE FROM call`
    },

    async deleteCall(id) {
        return await db`DELETE FROM call WHERE id = ${id}`
    },

}

export default callRepository