import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import postModel from "../models/post-model.js";
import { AuthorType, PostType } from "./types.js";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // create a post
    createPost: {
      type: PostType,
      args: {
        title: {
          type: GraphQLString,
        },
        details: {
          type: GraphQLString,
        },
        author: {
          type: AuthorType,
        },
      },
      async resolve(parents, args) {
        const { title, details } = args;
        const newPost = await postModel.create({ title, details });
        return newPost;
      },
    },

    // delete post
    deletePost: {
      type: PostType,
      args: {
        _id: GraphQLID,
      },
      async resolve(parents, args) {
        const { _id } = args;
        const deletedPost = await postModel.findOneAndDelete({ _id });
        return deletedPost;
      },
    },
  },
});

export default mutation;
