import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import axios from "axios";

export const runtime = "edge";

const generateId = () => Math.random().toString(36).slice(2, 15);

// Airline codes mapping
const AIRLINE_CODES = {
    "Air India": "AI", "Air India Express": "IX", "Akasa Air": "QP", "IndiGo": "6E", 
    "AirAsia India": "I5", "GoAir": "G8", "SpiceJet": "SG", "Vistara": "UK", 
    "Alliance Air": "9I", "Fly91": "IC", "FlyBig": "S9", "IndiaOne Air": "I7", 
    "Star Air": "S5", "Zooom Air": "ZO"
};

// City-to-airport code mapping
const CITY_TO_CODE = {
    "Agartala": "IXA", "Agatti": "AGX", "Agra": "AGR", "Ahmedabad": "AMD", "Aizawl": "AJL", 
    "Amritsar": "ATQ", "Aurangabad": "IXU", "Ayodhya": "AYJ", "Bagdogra": "IXB", "Bareilly": "BEK", 
    "Belagavi": "IXG", "Bengaluru": "BLR", "Bhopal": "BHO", "Bhubaneswar": "BBI", "Chandigarh": "IXC", 
    "Chennai": "MAA", "Coimbatore": "CJB", "Darbhanga": "DBR", "Dehradun": "DED", "Delhi": "DEL", 
    "Deoghar": "DGH", "Dharamshala": "DHM", "Dibrugarh": "DIB", "Dimapur": "DMU", "Diu": "DIU", 
    "Durgapur": "RDP", "Gaya": "GAY", "Goa": "GOI", "Gondia": "GDB", "Gorakhpur": "GOP", 
    "Guwahati": "GAU", "Gwalior": "GWL", "Hirasar": "HSR", "Hubli": "HBX", "Hyderabad": "HYD", 
    "Imphal": "IMF", "Indore": "IDR", "Itanagar": "HGI", "Jabalpur": "JLR", "Jagdalpur": "JGB", 
    "Jaipur": "JAI", "Jaisalmer": "JSA", "Jammu": "IXJ", "Jharsuguda": "JRG", "Jodhpur": "JDH", 
    "Jorhat": "JRH", "Kadapa": "CDP", "Kannur": "CNN", "Kanpur": "KNU", "Khajuraho": "HJR", 
    "Kochi": "COK", "Kolhapur": "KLH", "Kolkata": "CCU", "Kozhikode": "CCJ", "Kurnool": "KJB", 
    "Leh": "IXL", "Lucknow": "LKO", "Madurai": "IXM", "Mangaluru": "IXE", "Mumbai": "BOM", 
    "Mysuru": "MYQ", "Nagpur": "NAG", "Nashik": "ISK", "North Goa": "GOX", "Pantnagar": "PGH", 
    "Patna": "PAT", "Port Blair": "IXZ", "Prayagraj": "IXD", "Pune": "PNQ", "Raipur": "RPR", 
    "Rajahmundry": "RJA", "Rajkot": "RAJ", "Ranchi": "IXR", "Salem": "SXV", "Shillong": "SHL", 
    "Shirdi": "SAG", "Shivamogga": "RQY", "Silchar": "IXS", "Srinagar": "SXR", "Surat": "STV", 
    "Thiruvananthapuram": "TRV", "Tiruchirappalli": "TRZ", "Tirupati": "TIR", "Tuticorin": "TCR", 
    "Udaipur": "UDR", "Vadodara": "BDQ", "Varanasi": "VNS", "Vijayawada": "VGA", "Visakhapatnam": "VTZ"
};

const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  
// Helper function to format datetime
const formatDatetime = (isoString) => {
    try {
        const dt = new Date(isoString);
        return dt.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    } catch (error) {
        console.error(`Error: Invalid datetime format - ${isoString}`);
        return isoString; // Fallback to raw string if parsing fails
    }
};

// Helper function to get airport code from city name
const getAirportCode = (cityName) => {
    return CITY_TO_CODE[cityName] || null;
};

// Format flight number with airline code
const formatFlightNumber = (airlineName, flightNumber) => {
    const airlineCode = AIRLINE_CODES[airlineName];
    if (airlineCode) {
        return `${airlineCode}${flightNumber}`;
    } else {
        console.error(`Error: Airline '${airlineName}' not found in dictionary.`);
        return flightNumber; // Fallback to just the flight number if airline not found
    }
};

// Process flight details and convert fields
const processDetails = (details) => {
    // Convert city names to airport codes
    details.source = getAirportCode(capitalizeFirstLetter(details.source),);
    details.destination = getAirportCode(capitalizeFirstLetter(details.destination),);

    // Check if mappings were successful
    if (!details.source || !details.destination) {
        console.error("Error: City to airport code mapping failed.");
        return null;
    }

    return details;
};

const buildGoogleGenAIPrompt = (messages, initialMessage) => {
    // Construct the prompt with the initial instruction and the user query
    return [
      {
        id: generateId(),
        role: "system",
        content: initialMessage.content, // Contains the main task instructions
      },
      ...messages.map((message) => ({
        id: message.id || generateId(),
        role: message.role,
        content: message.content,
      })),
    ];
  };
  
  const extractDetails = async (userQuery) => {
    try {
      // Build the AI prompt using buildGoogleGenAIPrompt function
      const initialMessage = {
        content: `
          You are an intelligent assistant. Extract the following details from the user query and return them in JSON format:
          - Source city
          - Destination city
          - Date of travel
          - Adults
          - Children
          If any information is missing, use \`null\`.
  
          Input: 'I want to go from Ahmedabad to Goa on 23rd December for 2 adults and 1 child.'
          The output should use the following format:
          {
            "source": "Ahmedabad",
            "destination": "Goa",
            "date": "2025-12-23",
            "adults": 2,
            "children": 1
          }
          Dates should be formatted as YYYY-MM-DD (e.g., '23rd December' -> '2025-12-23'). Current year is 2025, always put the year 2025 in date.
        `,
      };
  
      const messages = [
        {
          id: generateId(),
          role: "user",
          content: userQuery,
        },
      ];
  
      const prompt = buildGoogleGenAIPrompt(messages, initialMessage);
  
      // Generate text using the Gemini model
      const { text } = await generateText({
        model: google("models/gemini-2.0-flash-exp"),
        prompt: JSON.stringify(prompt),
      });
  
      // Parse and validate the AI's response
      let extractedDetails;
    try {
      extractedDetails = JSON.parse(text.trim().replace(/```json\n|```/g, ""));
    } catch (error) {
      console.error("Error parsing AI response:", text);
      throw new Error("Error parsing AI response.");
    }

    let flag = null;
    const missingFields = [];
    if (!extractedDetails.source) missingFields.push("source");
    if (!extractedDetails.destination) missingFields.push("destination");
    if (!extractedDetails.date) missingFields.push("date");

    if (missingFields.length > 0) {
        flag = "x";
      return { missingFields, flag };
    }

    let detailsOfPrompt = extractedDetails
    
    return { detailsOfPrompt, flag };    
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error processing the flight search.");
  }
};

  
  const searchFlights = async (details) => {
    const url = process.env.RAPIDAPI_URL;

    const querystring = {
      fromEntityId: details.source,
      toEntityId: details.destination,
      departDate: details.date,
      market: "IN",
      currency: "INR",
      adults: details.adults || 1, // Default to 1 adult
      children: details.children || 0, // Default to 0 children
      cabinClass: "economy",
    };
  
    const headers = {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    };
  
    try {
      const response = await axios.get(url, { headers, params: querystring });
  
      if (response.status === 200) {
        console.log("Flight data fetched successfully.");
        return response.data;
      } else {
        console.error("Error fetching flight data:", response.status, response.data);
        return null;
      }
    } catch (error) {
      console.error("Error fetching flight data:", error.message);
      return null;
    }
  };


// Main API handler
const detailsExtractor = async (userQuery) => {
    const { detailsOfPrompt, flag } = await extractDetails(userQuery);
  
    if (flag === "x") {
      return { detailsOfPrompt, flag: "x" };
    }
  
    if (detailsOfPrompt) {
      const details = processDetails(detailsOfPrompt);
      if (!details) {
        console.error("Processing failed.");
        return { details: null, flag: null };
      }
  
      const flightData = await searchFlights(details);
  
      if (flightData) {
        const itineraries = flightData.data?.itineraries || [];
        const flights = [];
        let count = 0;
  
        itineraries.forEach((itinerary) => {
          if (count >= 10) return;
  
          const price = itinerary.price?.formatted;
          const legs = itinerary.legs?.[0]; // Assuming single leg for simplicity
          if (legs) {
            const airline = legs.carriers?.marketing?.[0]?.name;
            const flightNumber = legs.segments?.[0]?.flightNumber;
            const formattedFlightNumber = formatFlightNumber(airline, flightNumber);
            const departure = legs.departure;
            const arrival = legs.arrival;
            const source = legs.origin?.displayCode;
            const destination = legs.destination?.displayCode;
            const departureTime = formatDatetime(departure);
            const arrivalTime = formatDatetime(arrival);
  
            flights.push({
              Airline: airline,
              "Flight Number": formattedFlightNumber,
              Price: price,
              Departure: source,
              Arrival: destination,
              "Departure Time": departureTime,
              "Arrival Time": arrivalTime,
            });
  
            count++;
          }
        });
  
        return { flights, flag: null };
      } else {
        console.error("Could not extract details from the user query.");
        return { flights: null, flag: null };
      }
    }
  };
  
  export const GET = async (req) => {
    try {
      const url = new URL(req.url);
      const userQuery = url.searchParams.get('ans');
  
      if (!userQuery) {
        return new Response(
          JSON.stringify({ error: 'Query parameter "ans" is required.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
  
      // Process the details using the detailsExtractor function
      const { flights, flag } = await detailsExtractor(userQuery);
  
      // Check if the required fields were extracted properly
      if (flag === 'x') {
        return new Response(
          JSON.stringify({
            response:
              'You are a helpful assistant. Politely explain that the user needs to provide all necessary details to proceed with the booking in one message. Mention that the user should include all missing fields (e.g., source, destination, and date) in a single query. Provide an example: Book a plane from Ahmedabad to Goa on 14th October.',
          }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
  
      // If flights were found, format and return the flight data
      if (flights) {
        const flightDict = flights.reduce((acc, flight, index) => {
          acc[index] = flight;
          return acc;
        }, {});
        // console.log('Flight data:', flightDict);
        return new Response(JSON.stringify({ response: flightDict }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      // Handle case when no flights were found
      return new Response(
        JSON.stringify({ response: 'No flights found.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  };
  