import userRepository from "../repositorys/users.repository.js";

export default async function authRoutes(app) {

    // Login
    app.post("/auth/login", async (req, reply) => {

        const {email, password } = req.body || {};

        if (!email || !password) {
            return reply.code(400).send({ message: "email e password são obrigatórios" });
        }

        const userBd = await userRepository.findByEmail(email);

        const user = userBd[0]

        if (!user || user.password !== password) {
            return reply.code(401).send({ message: "Credenciais inválidas" });
        }

        const accessToken = app.jwt.sign({ sub: user.user_id, email: user.email, is_admin: user.is_admin });
        const refreshToken = app.jwt.sign({ sub: user.user_id, type: "refresh" }, { expiresIn: "7d" });

        return reply.send({
            accessToken,
            refreshToken,
            user: { id: user.user_id, name: user.name, email: user.email, is_admin: user.is_admin }
        });

    });

    // Refresh
    app.post("/auth/refresh", async (req, reply) => {

        const { refreshToken } = req.body;

        if (!refreshToken) return reply.code(400).send({ message: "refreshToken é obrigatório" });

        try {

            const payload = app.jwt.verify(refreshToken);

            if (payload.type !== "refresh") throw new Error("tipo inválido");

            const accessToken = app.jwt.sign({ sub: payload.sub });
            
            return reply.send({ accessToken });

        } catch {

            return reply.code(401).send({ message: "Refresh token inválido/expirado" });

        }

    });
}