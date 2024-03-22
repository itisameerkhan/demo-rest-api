import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("DB connection successful", connect.connection.name);
  } catch (e) {
    console.log("db not connected", e);
  }
};

export default connectDB;