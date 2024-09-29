const mongoose = require("mongoose");

// Room Schema for individual room details
const RoomSchema = new mongoose.Schema({
  roomType: { type: String, required: true }, // e.g., Single, Double, Suite
  numberOfBeds: { type: Number, required: true }, // Number of beds in the room
  pricePerNight: { type: Number, required: true }, // Price for one night stay
  amenities: [{ type: String }], // List of amenities in the room (e.g., Wi-Fi, AC, TV, etc.)
  maxOccupancy: { type: Number, required: true }, // Maximum number of people who can stay in this room
  availableDates: [
    {
      from: { type: Date, required: true }, // Available from this date
      to: { type: Date, required: true }, // Available until this date
    },
  ], // Dates when this room is available for booking
  isAvailable: { type: Boolean, default: true }, // Availability flag
});

// Hotel Schema
const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the hotel
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  }, // Complete address of the hotel
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String }, // Optional website field
  },
  rooms: [RoomSchema], // Array of room schemas
  facilities: [{ type: String }], // Facilities provided by the hotel (e.g., Pool, Gym, Restaurant)
  nearbyAttractions: [{ type: String }], // List of nearby tourist spots or attractions
});

module.exports = mongoose.model("Hotel", HotelSchema);
