export default {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "test",
  synchronize: true,
  entities: ["src/db/entity/*.ts"],
  migrations: ["src/db/migration/*.ts"],
  migrationsTableName: "migrations",
  cli: {
    entitiesDir: ["src/db/entity"],
    migrationsDir: "src/db/migration",
  },
};
