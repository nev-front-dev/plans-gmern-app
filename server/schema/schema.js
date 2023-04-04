const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
const Plan = require('../models/Plan.js')

const PlanType = new GraphQLObjectType({
  name: "Plan",
  fields: () => ({
    id: { type: GraphQLID },
    block: { type: GraphQLString },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    living__space: { type: GraphQLFloat },
    total__area: { type: GraphQLFloat },
    url__gen: { type: GraphQLString },
    url__3d: { type: GraphQLString },
    url__schema: { type: GraphQLString },
    populare: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    plans: {
        type: new GraphQLList(PlanType),
        resolve(parent, args) {
          return Plan.find()
        },
      },
    plan: {
      type: PlanType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Plan.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
