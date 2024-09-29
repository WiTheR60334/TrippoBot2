const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    bestTimeToVisit: { type: String }, // Can store season or months
    weather: { type: String }, // General weather conditions (sunny, rainy, etc.)
    attractions: [{ type: String }], // List of popular sightseeing spots
    localCuisine: [{ type: String }], // Popular local dishes
    events: [{ type: String }], // Major events/festivals
    safetyTips: [{ type: String }], // General safety guidelines
    travelAdvisories: [{ type: String }],
    currency: { type: String },
    timezone: { type: String },
    averageCostPerDay: { type: Number }, // For budget estimation
    languagesSpoken: [{ type: String }], // For language translation services
    localTransport: [{ type: String }], // Transport options (taxis, buses)
  },
  { timestamps: true }
);

module.exports = mongoose.model("Destination", DestinationSchema);
