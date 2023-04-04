const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(
    `Mongo is connected:${conn.connection.host}`.green.underline.bold
  );
};

module.exports = connectDB;
