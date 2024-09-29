const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  airline: { type: String, required: true }, // Name of the airline
  flightNumber: { type: String, required: true }, // Flight number
  departureAirport: { type: String, required: true }, // Airport code or name for departure
  arrivalAirport: { type: String, required: true }, // Airport code or name for arrival
  schedules: [
    {
      departureTime: { type: Date, required: true }, // Specific departure time for this flight instance
      arrivalTime: { type: Date, required: true }, // Specific arrival time for this flight instance
      availableSeats: { type: Number, required: true }, // Number of available seats for this specific flight
      price: { type: Number, required: true }, // Price of the flight for this specific instance
    },
  ],
});

module.exports = mongoose.model("Flight", FlightSchema);
