const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  const uri = process.env.MONGODB_URI; // Retrieve the MongoDB URI from environment variables

  // Check if the URI is defined
  if (!uri) {
    console.error(
      "MongoDB connection URI is undefined. Please check your .env file."
    );
    process.exit(1); // Exit the process if the URI is not set
  }

  // Optional: Log the URI for debugging (make sure not to log sensitive information in production)
  console.log("MongoDB URI:", uri);

  mongoose
    .connect(uri, {
      // Use the URI directly
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((error) => {
      console.log("DB connection failed");
      console.error("Error is: ", error.message); // Log only the error message for clarity
      process.exit(1);
    });
};
