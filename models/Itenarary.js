const mongoose = require("mongoose");

// Activity Schema
const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the activity (e.g., Museum Visit)
  description: { type: String }, // Description of the activity
  startTime: { type: Date, required: true }, // Start time of the activity
  endTime: { type: Date, required: true }, // End time of the activity
  category: { type: String }, // Category (e.g., sightseeing, adventure)
  location: {
    name: { type: String, required: true }, // Activity location
    address: { type: String },
    coordinates: { lat: { type: Number }, long: { type: Number } }, // Coordinates for map
  },
  estimatedTime: { type: Number }, // Time to spend at this activity (in hours)
});

// Restaurant Schema (embedded in Itinerary)
const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  cuisine: { type: String }, // Type of cuisine (e.g., Italian, Indian)
  rating: { type: Number }, // Average rating
});

// Itinerary Schema
const ItinerarySchema = new mongoose.Schema({
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  }, // Selected destination
  startDate: { type: Date, required: true }, // Travel start date
  endDate: { type: Date, required: true }, // Travel end date
  activities: [ActivitySchema], // List of activities for each day
  restaurants: [RestaurantSchema], // Suggested restaurants
  totalCost: { type: Number }, // Estimated total cost of the trip
});

module.exports = mongoose.model("Itinerary", ItinerarySchema);
