import { Resolver, Query } from "type-graphql";
import Product from "../entities/Product";

@Resolver(Product)
class ProductResolver {
  @Query(() => [Product])
  async products() {
    return Product.find()
  }
}

export default ProductResolver;