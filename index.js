import express from 'express';
import process from 'node:process';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './connectDataBase.js';
import DataFetch from './routes/DataFetch.js';
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware should be placed early
app.use(express.json());

//  Secure headers
app.use(helmet());

//  CORS: Adjust this to match the frontend URL
app.use(cors({
  origin: process.env.CLIENT_ORIGIN,
  credentials: true, // Allow cookies/authorization headers
}));

// Route setup
app.use('/', DataFetch);

// Centralized error handler
app.use(errorHandler);

// Connect to DB and start server
(async () => {
  try {
    await connectDB();
    console.log(' Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
})();
