import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';

// Connect to MongoDB

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the process with failure
  }
  
};


  export default connectDB;
