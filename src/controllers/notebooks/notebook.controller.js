import notebookRepository from "../../repositorys/notebooks/notebook.repository.js"

const notebookController = {

    async getAllNotebooks() {

        return await notebookRepository.getAllNotebooks()
        
    },

    async createNotebook(req) {

        try {

            const { status, date, student, classe } = req.body

            await notebookRepository.createNotebook(
                status,
                date,
                student,
                classe
            )

            return { 'message': 'success' }

        } catch (e) {

            return { 'message': 'error' }

        }

    },

    async updateNotebook(req) {

        try {

            const { id } = req.params

            const { status } = req.body

            await notebookRepository.updateNotebook(
                status,
                id
            )

            return { 'message': 'success' }

        } catch (e) {

            return { 'message': 'error' }

        }

    },

    async deleteNotebook(req) {

        const { id } = req.params

        return await notebookRepository.deleteNotebook(id)

    }

}

export default notebookController