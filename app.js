const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const rootRouter = require('./routes/index');
const errorHandler = require('./middlewares/error-handler');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(cookieParser());
app.use(express.json());
app.use('/', rootRouter);
app.use(errors());
app.use(errorHandler);

app.listen(3000);
