import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

const PORT = process.env.PORT || 4000;

async function main() {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [__dirname + "/modules/**/resolvers/**/*.resolver.ts"], // add this
  });
  const server = new ApolloServer({ schema });
  await server.listen(PORT);
  console.log(`Server has started on port : ${PORT}!`);
}
main();
