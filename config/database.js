import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
