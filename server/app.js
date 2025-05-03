require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tasksRoute = require('./routes/taskroute');

const app = express();

// Middleware
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  app.use('/api/tasks', tasksRoute);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });