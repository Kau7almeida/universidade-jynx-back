// Import the framework and instantiate it
import Fastify from 'fastify';

import cors from '@fastify/cors'

// rotas
import usersRoutes from './routes/users.route.js';
import classesRoutes from './routes/classes/classes.routes.js';
import callRoutes from './routes/call.route.js';
import studentRoutes from './routes/students/student.routes.js';
import notebookRoutes from './routes/notebooks/notebook.route.js';

const app = Fastify({
    logger: true
})

await app.register(cors, {
    origin: true,
    credentials: true,
    methods: '*'
});

await app.register(usersRoutes, {
    prefix: '/users'
})

await app.register(classesRoutes, {
    prefix: '/classe'
})

await app.register(callRoutes, {
    prefix: '/call'
})

await app.register(studentRoutes, {
    prefix: '/students'
})

await app.register(notebookRoutes, {
    prefix: '/notebooks'
})

// Declare a route
app.get('/', async function handler(request, reply) {
    return 'server JYNX is running at port 3333'
})

// Run the server!
try {
    const PORT = 3333
    app.listen({ port: PORT, host: '0.0.0.0' })
} catch (err) {
    app.log.error(err)
    process.exit(1)
}