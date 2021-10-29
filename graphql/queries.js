import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import postModel from "../models/post-model.js";
import { PostType } from "./types.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // query for all posts
    posts: {
      type: GraphQLList(PostType),
      async resolve() {
        const blogs = await postModel.find({}).populate("author");
        return blogs;
      },
    },

    // query for a single post
    post: {
      type: PostType,
      args: {
        _id: {
          type: GraphQLID,
        },
      },
      async resolve(parent, args) {
        const { _id } = args;
        const blog = await postModel.findOne({ _id }).populate("author");
        return blog;
      },
    },
  },
});

export default RootQuery;
