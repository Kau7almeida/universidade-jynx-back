import userRepository from "../repositorys/users.repository.js";

const userController = {

    async getAllUsers() {
        return await userRepository.getAllUsers()
    },

    async createUser(req) {

        try {

            const { name, email, password, is_admin } = req.body

            await userRepository.createUser(
                name,
                email,
                password,
                is_admin
            )

            return { 'message': 'success' }

        } catch (e) {

            return { 'message': 'error' }

        }

    },

    async deleteUser(req) {

        const { id } = req.params

        return await userRepository.deleteUser(id)

    }

}

export default userController