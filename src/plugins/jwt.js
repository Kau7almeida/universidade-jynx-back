import fp from 'fastify-plugin';

async function jwtPlugin(app) {

    const secret = process.env.JWT_SECRET

    app.register(import('@fastify/jwt'), {
        secret: secret,
        sign: { expiresIn: '15m' } // token curto
    });

    // Decorator para proteger rotas
    app.decorate('auth', async (request, reply) => {
        try {
            return await request.jwtVerify();
        } catch (err) {
            return reply.code(401).send({ message: 'Token inválido ou ausente' });
        }
    });

}

export default fp(jwtPlugin)