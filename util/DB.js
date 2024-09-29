import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

const connectDB = async () => {
  if (isConnected) {
    console.log('Using existing MongoDB connection...');
    return;
  }

  try {
    if (mongoose.connection.readyState === 1) {
      isConnected = true;
      console.log('Already connected to MongoDB.');
      return;
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error; // Throwing the error instead of calling `process.exit(1)` in serverless environments
  }
};

export default connectDB;
