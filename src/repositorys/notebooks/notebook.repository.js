import db from "../../connection.js"

const notebookRepository = {

    async getAllNotebooks() {
        return await db`SELECT * FROM notebooks`
    },

    async createNotebook(status, date, student, classe) {

        if (!status) {
            status = 'Emprestado'
        }

        return await db`INSERT INTO notebooks (status, date, student, classe)
        VALUES(${status}, ${date}, ${student}, ${classe})`
    },

    async updateNotebook(status, id) {
        return await db`UPDATE notebooks SET status = ${status} WHERE id = ${id}`
    },

    async deleteNotebook(id) {
        return await db`DELETE FROM notebooks WHERE id = ${id}`
    },

}

export default notebookRepository