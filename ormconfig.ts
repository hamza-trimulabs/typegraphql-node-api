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

// postgres://mtstkiufhxcgoi:436a86feaa4257928bdf26b57e3162eb2147e2b235abf29d875ef98628cadf89@ec2-34-231-63-30.compute-1.amazonaws.com:5432/d68ok4j9ce106d
