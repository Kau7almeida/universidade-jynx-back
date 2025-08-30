import classesRepository from '../../repositorys/classes/classes.repository.js'

const classesController = {

    async getAllClasses() {

        return await classesRepository.getAllClasses()
        
    },

    async createClasse(req) {

        try {

            const { name, unit_id } = req.body

            await classesRepository.createClasse(
                name,
                unit_id
            )

            return { 'message': 'success' }

        } catch (e) {

            return { 'message': 'error' }

        }

    },

    async deleteClasse(req) {

        const { id } = req.params

        return await classesRepository.deleteClasse(id)

    }

}

export default classesController