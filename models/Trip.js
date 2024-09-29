const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    numberOfTravelers: { type: Number, required: true },
    specialRequirements: [{ type: String }],
    preferences: {
      activities: [{ type: String }],
      accommodationType: { type: String },
      transportation: { type: String },
      languages: [{ type: String }],
    },
    itinerary: { type: mongoose.Schema.Types.ObjectId, ref: "Itinerary" }, // Link to itinerary
    totalCost: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", TripSchema);
