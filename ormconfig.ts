export default process.env.NODE_ENV === "production" ||
process.env.NODE_ENV === "staging"
  ? {
      type: "postgres",
      url: process.env.DATABASE_URL,
      synchronize: true,
      entities: ["src/db/entity/*.ts"],
      migrations: ["src/db/migration/*.ts"],
      migrationsTableName: "migrations",
      cli: {
        entitiesDir: ["src/db/entity"],
        migrationsDir: "src/db/migration",
      },
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      type: "postgres",
      url: process.env.DATABASE_URL,
      synchronize: true,
      entities: ["src/db/entity/*.ts"],
      migrations: ["src/db/migration/*.ts"],
      migrationsTableName: "migrations",
      cli: {
        entitiesDir: ["src/db/entity"],
        migrationsDir: "src/db/migration",
      },
    };
