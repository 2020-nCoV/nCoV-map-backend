'use strict';

const fs = require('fs');
const glob = require('glob');
const config = require('rob-config');
const tag = require('graphql-tag');
const { ApolloServer } = require('apollo-server-express');

const resolvers = require('require-all')(`${__dirname}/../resolvers`);
const scopeDirective = require('../directives/scope');

const graphqlFiles = glob.sync('../typedefs/**/*.graphql', {
  cwd: __dirname,
  absolute: true,
});

const typedefs = graphqlFiles.map((file) => tag(fs.readFileSync(file, { encoding: 'utf-8' })));

module.exports = (app) => {
  const server = new ApolloServer({
    ...config.get('graphql'),
    typeDefs: typedefs,
    resolvers: Object.entries(resolvers).map(([key, values]) => values),
    schemaDirectives: {
      scope: scopeDirective,
    },
    context: ({ req, res }) => ({
      req: req,
      res: res,
    }),
  });

  server.applyMiddleware({ app });
};
