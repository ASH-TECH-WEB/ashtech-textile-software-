// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const routes = require('./routes');
// const { errorHandler } = require('./middlewares/errorMiddleware');

// const app = express();

// app.use(helmet());
// app.use(cors());
// app.use(express.json());
// app.use('/api', routes);  // central route handler
// app.use(errorHandler);    // error handling middleware

// module.exports = app;


import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', routes);      // central route handler
app.use(errorHandler);        // error handling middleware

export default app;
