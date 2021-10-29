import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import dbConfig from "./config/database.js";
import schema from "./graphql/schema.js";
const server = express();

const port = process.env.PORT;

const dbConnection = await dbConfig();

server.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

if (dbConnection) {
  server.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
} else {
  console.log("Opps! database connection error");
}
