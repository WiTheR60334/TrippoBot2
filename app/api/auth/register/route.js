import { NextResponse } from "next/server";
import User from "../../../../models/User"; // Your User model
import bcrypt from "bcrypt";
const express = require("express");

const database = require("../../../../util/DB");

database.connect();

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Check if all required fields are present
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required for signing up",
        },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User is already registered. Sign in to continue",
        },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      pastTrips: [],
      currentTrip: null,
    });

    // Save the new user to the database
    await newUser.save();

    return NextResponse.json(
      {
        success: true,
        message: "User is registered successfully",
        newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
