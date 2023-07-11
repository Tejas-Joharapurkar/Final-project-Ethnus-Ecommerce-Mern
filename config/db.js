import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://Tejas:T.e.j.a.s.@nodeandexpressproject.nz4re1q.mongodb.net/Ecommerce?retryWrites=true&w=majority");
    console.log(
      `Conneted To Mongodb Databse`
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
