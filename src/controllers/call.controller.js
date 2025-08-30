import callRepository from "../repositorys/call.repository.js"

const callsController = {

    async getAllCall() {
        return await callRepository.getAllCall()
    },

    async createCall(req) {

        try {

            const { name, classe_id } = req.body

            await callRepository.createCall(
                name,
                classe_id
            )

            return { 'message': 'success' }

        } catch (e) {

            return { 'message': 'error' }

        }

    },

    async deleteAllCalls(req) {

        return await callRepository.deleteAllCalls()

    },

    async deleteCall(req) {

        const { id } = req.params

        return await callRepository.deleteCall(id)

    }

}

export default callsController