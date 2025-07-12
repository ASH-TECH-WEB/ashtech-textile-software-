// require('dotenv').config();
// const app = require('./src/app');
// const connectDB = require('./src/config/db');

// const PORT = process.env.PORT || 5000;

// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running at ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ Failed to connect to MongoDB', err);
//     process.exit(1); // exit the app if DB connection fails
//   });


import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import connectDB from './src/config/db.js';

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB', err);
    process.exit(1);
  });
