import { buildSchema } from 'type-graphql';
import ProductResolver from './resolvers/ProductResolver';

export default buildSchema({
  resolvers: [ProductResolver],
});