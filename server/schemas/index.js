import User from './user';
import Agenda from './agenda';

const SchemaDefinition = `
  type RootQuery {
    project: String
  }

  type RootMutation {
    project: String
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default [User, Agenda, SchemaDefinition];
