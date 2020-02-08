'use strict';

const {
  DirectiveLocation,
  GraphQLDirective,
  GraphQLEnumType,
  GraphQLSchema,
  defaultFieldResolver,
} = require('graphql');
const { SchemaDirectiveVisitor } = require('graphql-tools');
const { scope } = require('../enums/scope');

class ScopeDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { type } = this.args;
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const [, , ctx] = args;
      if (type === scope.PRIVATE) {
        try {
          // TODO 验证Token
        } catch (error) {
          // TODO 返回HTTP Status 401 或者 403
          throw error;
        }
      }
      return resolve.apply(this, args);
    };
  }
  static getDirectiveDeclaration(directiveName, schema) {
    return new GraphQLDirective({
      name: directiveName,
      locations: [DirectiveLocation.FIELD_DEFINITION],
      args: {
        type: {
          type: schema.getType('Scope'),
          defaultValue: 'PUBLIC',
        },
      },
    });
  }
}

module.exports = ScopeDirective;
