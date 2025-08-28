import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongo_url = process.env.MONGODB_URI;
    if (!mongo_url) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    mongoose.connection.on("connected", () => {
      console.log("✅ DB Connected!");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ DB Connection Error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ DB Disconnected!");
    });

    await mongoose.connect(`${mongo_url}/Ecommerce`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
  } catch (error) {
    console.error("❌ DB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
