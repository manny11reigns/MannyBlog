import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const commentSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

const commentModel = model("comment", commentSchema);

export default commentModel;
