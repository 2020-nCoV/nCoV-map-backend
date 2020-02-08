module.exports = {
  server: {
    host: '0.0.0.0',
    port: 8000,
  },
  db: {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'ncov',
    username: 'timothy',
    password: '',
  },
  cors: {
    origin: '*',
    allowedHeaders: '*',
  },
  graphql: {
    debug: true,
    tracing: false,
    introspection: true,
  },
};
