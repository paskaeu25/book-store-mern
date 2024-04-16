import express from 'express';
import { PORT, MONGODB } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

// Middleware for using JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// use routes
app.use('/books', bookRoutes);

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
