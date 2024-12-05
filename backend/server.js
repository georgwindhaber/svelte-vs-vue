// Import the framework and instantiate it
import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  // put your options here
});

const todos = {
  vue: [],
  svelte: [],
};

const timeout = 250;

// Declare a route
fastify.get("/todos/:id", async function handler(request, reply) {
  await new Promise((r) => setTimeout(r, timeout));
  return todos[request.params.id];
});
fastify.put("/todos/:id", async function handler(request, reply) {
  todos[request.params.id] = request.body;
  await new Promise((r) => setTimeout(r, timeout));
  return todos[request.params.id];
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
