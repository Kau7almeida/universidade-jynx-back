import userRepository from "../repositorys/users.repository.js";

import bcrypt from 'bcrypt';

const userController = {

    async getAllUsers() {
        return await userRepository.getAllUsers()
    },

    async createUser(req) {

        try {

            const { name, email, password, is_admin } = req.body

            let hashPassword = await bcrypt.hash(password, 10)

            await userRepository.createUser(
                name,
                email,
                hashPassword,
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

    },

    async login(req) {

        const { email, password } = req.body

        let existe = await userRepository.findByEmail(email);

        if(existe.length < 1){
            return 'nao foi possivel encontrar usuário'
        }

        let hash = existe[0].password

        let compare = await bcrypt.compare(password, hash)

        if(!compare){
            return 'senha incorreta'
        }

        return ['Senha correta', existe[0]]

    }

}

export default userController