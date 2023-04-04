const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const colors = require('@colors/colors');
const connectDB = require('./config/db.js');

require("dotenv").config();

const port = process.env.PORT || 3003;

const app = express();
connectDB()

const root = {
  hello: () => {
    return "Hello World!";
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port);
console.log(`Server start on port ${port}!`);
