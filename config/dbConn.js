const mongoose = require("mongoose");

connectDB().catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI);
}

module.exports = connectDB;
