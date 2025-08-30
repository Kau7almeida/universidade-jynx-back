import db from "../connection.js"

const userRepository = {

    async getAllUsers() {
        return await db`SELECT * FROM users`
    },

    async createUser(name, email, password, is_admin) {
        return await db`INSERT INTO users (name, email, password, is_admin)
        VALUES(${name}, ${email}, ${password}, ${is_admin})`
    },

    async deleteUser(id) {
        return await db`DELETE FROM users WHERE id = ${id}`
    },
    
    async findByEmail(email) {
        return await db`
            SELECT * FROM users
            WHERE email = ${email}
        `;
    },

    async findById(id) {
        return await db`
            SELECT id, name, email, is_admin
            FROM users
            WHERE id = ${id}
        `;
    }

}

export default userRepository