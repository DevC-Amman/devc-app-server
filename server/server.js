import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { admin } from './fcm';
import Schema from './schemas';
import Resolvers from './resolvers';

const schema = makeExecutableSchema({ typeDefs: Schema, resolvers: Resolvers });

const app = express();
const PORT = 4100;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlExpress(() => ({ schema })),
);

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => {
  console.log(`Server Running on http://127.0.0.1:${PORT}/graphql`);
  console.log(`GraphiQL http://127.0.0.1:${PORT}/graphiql`);
});
