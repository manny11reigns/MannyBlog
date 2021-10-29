import mongoose from "mongoose";
import { commentSchema } from "./comment-model.js";
const { Schema, model } = mongoose;

export const postSchema = new Schema({
  title: {
    type: String,
  },
  details: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
  banner: {
    type: String,
  },
  comments: {
    type: [commentSchema],
  },
  likes: {
    type: Number,
    default: 0,
  },
  disLikes: {
    type: Number,
    default: 0,
  },
});

const postModel = model("post", postSchema);

export default postModel;
