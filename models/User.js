const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  currentTrip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip", // Reference to the TripSchema
  },
  pastTrips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip", // Reference to the TripSchema for past trips
    },
  ],
  role: { type: String, default: "user" }, // 'user' or 'admin'
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
module.exports = User;
