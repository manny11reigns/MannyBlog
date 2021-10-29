import mongoose from "mongoose";

const dbConfig = async () => {
  const connection = await mongoose.connect("mongodb://localhost:27017/blog");
  if (connection.connections) {
    console.log(`Database is connected on ${connection?.connections[0]?.host}`);
    return true;
  } else {
    return false;
  }
};

export default dbConfig;
