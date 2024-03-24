import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL);
  } catch (error) {
    throw new Error("Connection Failed");
  }
};
export default connect;
