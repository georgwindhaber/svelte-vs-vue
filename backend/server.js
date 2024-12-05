// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

const todos = {
  vue: [],
  svelte: [],
};

// Declare a route
fastify.get("/todos/:id", async function handler(request, reply) {
  return todos[request.params.id];
});
fastify.put("/todos/:id", async function handler(request, reply) {
  todos[request.params.id] = request.body;
  return todos[request.params.id];
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
