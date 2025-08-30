import userRepository from "../repositorys/users.repository.js";

export default async function meRoutes(app) {

    app.get("/me", { preHandler: [app.auth] }, async (req, reply) => {

        if (req.user?.type === "refresh") {
            return reply.code(401).send({ message: "Use o accessToken, não o refreshToken" });
        }


        const me = await userRepository.findById(req.user.sub);

        if (!me) return reply.code(404).send({ message: "Usuário não encontrado" });

        return reply.send(me); // id, name, email, is_admin

    });

}