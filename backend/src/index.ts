import db from "./db";
import schemaPromise from "./schema";
import { ApolloServer } from "@apollo/server";
import env from "./env";
import { startStandaloneServer } from "@apollo/server/standalone";

const { SERVER_PORT: port } = env;

const main = async () => {
    await db.initialize()  
    console.log("DB initialisée");
    const schema = await schemaPromise
    const server = new ApolloServer({ schema })
    const { url } = await startStandaloneServer(server, { listen: { port } });
}

main()

