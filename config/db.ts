import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/FNI");
    console.log(`MongoDB connected at ${conn.connection.host}`);
  } catch (error: any) {
    console.log("DB Error: ", error.message);
    process.exit(0);
  }
};

export default connectDb;
