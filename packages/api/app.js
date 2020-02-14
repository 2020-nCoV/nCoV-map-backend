'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const config = require('rob-config');

const crons = require('./crons');
const models = require('./models');
const graphqlMiddleware = require('./middlewares/graphql');

crons();
const app = express();
app.set('view engine', 'jade');

app.use(logger(config.get('logger.env')));
app.use(cors(config.get('cors')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(endpoints);

app.get('/', async (req, res) => {
  res.json({
    version: '',
  });
});

graphqlMiddleware(app);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
});

const server = http.createServer(app);

models.sequelize.sync().then(() => {
  const { host, port } = config.get('server');

  server.listen(port, host, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });

  server.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
      default:
        throw error;
    }
  });
});

module.exports = app;
