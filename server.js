//Package Imports
require("module-alias/register");
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//Module Imports
const corsOptions = require("@config/corsConfig");
const logger = require("@middlewares/logger");
const connectDB = require("@config/dbConn");

//Express App
const app = express();

//MongoDB
connectDB();

//Logger
app.use(logger);

//Cors
app.use(cors(corsOptions));

//Middlewares
app.use(express.json());
app.use(cookieParser());

// Route Handlers
app.use("/user", require("@routes/userRoutes"));
app.get("/", (_req, res) => {
  res.send("hello world!");
});

//Server listening on port 3500
mongoose.connection.on("connected", () => {
  app.listen(3500, () => {
    console.log("Server started on port 3500");
  });
});
