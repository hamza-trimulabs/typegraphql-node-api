import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

const PORT = process.env.PORT || 4000;

async function main() {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [__dirname + "/modules/**/resolvers/**/*.resolver.ts"],
  });
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const headers = req.headers || "";
      return {
        headers,
      };
    },
  });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: "/" });
  await app.listen(PORT);
  console.log(`Server has started on port : ${PORT}!`);
}
main();
