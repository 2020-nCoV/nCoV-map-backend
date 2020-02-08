module.exports = {
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'staging', 'integration', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  server: {
    host: {
      doc: '绑定地址',
      format: String,
      default: '127.0.0.1',
      env: 'HOST',
    },
    port: {
      doc: '监听端口',
      format: Number,
      default: 8000,
      env: 'PORT',
    },
  },
  logger: {
    env: {
      doc: 'Logger env',
      format: ['combined', 'common', 'dev', 'short', 'tiny'],
      default: 'tiny',
    },
    options: {
      doc: 'Logger options',
      format: 'Object',
      default: {},
    },
  },
  db: {
    dialect: {
      doc: '数据库类型',
      format: ['postgres', 'mysql', 'sqlite'],
      default: 'postgres',
      env: 'DB_DIALECT',
    },
    host: {
      doc: '数据库地址',
      format: String,
      default: '127.0.0.1',
      env: 'DB_HOST',
    },
    port: {
      doc: '数据库端口',
      format: Number,
      default: 5432,
      env: 'DB_PORT',
    },
    database: {
      doc: '数据库名',
      format: String,
      default: 'postgres',
      env: 'DB_DATABASE',
    },
    username: {
      doc: '数据库用户',
      format: String,
      default: 'postgres',
      env: 'DB_USERNAME',
    },
    password: {
      doc: '数据库密码',
      format: String,
      default: '',
      env: 'DB_PASSWORD',
    },
    timezone: {
      default: '+08:00',
    },
    define: {
      underscored: { default: true },
      freezeTableName: { default: false },
      charset: { default: 'utf-8' },
      dialectOptions: {
        collate: { default: 'utf8_general_ci-8' },
      },
      timestamps: { default: true },
    },
    pool: {
      max: { default: 5 },
      min: { default: 0 },
      acquire: { default: 30000 },
      idel: { default: 10000 },
    },
  },
  cors: {
    origin: {
      doc: 'Configures the Access-Control-Allow-Origin CORS header.',
      default: '*',
    },
    methods: {
      doc: 'Configures the Access-Control-Allow-Methods CORS header.',
      default: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    allowedHeaders: {
      doc: 'Configures the Access-Control-Allow-Headers CORS header.',
      default: '*',
    },
    exposedHeaders: {
      doc: 'Configures the Access-Control-Expose-Headers CORS header.',
      default: '',
    },
    credentials: {
      doc: 'Configures the Access-Control-Allow-Credentials CORS header.',
      default: false,
    },
    maxAge: {
      doc: 'Configures the Access-Control-Max-Age CORS header.',
      default: 3600,
    },
    preflightContinue: {
      doc: 'Pass the CORS preflight response to the next handler.',
    },
    optionsSuccessStatus: {
      doc:
        'Provides a status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.',
      default: 204,
    },
  },
  graphql: {
    debug: {
      doc: '是否启用 GraphQL debug 模式',
      format: Boolean,
      default: false,
    },
    tracing: {
      doc: '是否启用 GraphQL tracing 模式',
      format: Boolean,
      default: false,
    },
    introspection: {
      doc: '是否启用GraphQL introspection 模式',
      format: Boolean,
      default: false,
    },
  },
};
