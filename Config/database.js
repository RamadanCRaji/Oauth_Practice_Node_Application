const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.DB_STRING, {});

      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (err) {
      console.error("this is the erro", err);
      process.exit(1);
   }
};

module.exports = connectDB;
