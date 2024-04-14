import express from 'express';
import { PORT, MONGODB } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//connect to mongodb
mongoose
  .connect(MONGODB)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
