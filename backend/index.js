import express from 'express';
import { PORT, MONGODB } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

// Middleware for using JSON
app.use(express.json());

// Middleware for CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

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
