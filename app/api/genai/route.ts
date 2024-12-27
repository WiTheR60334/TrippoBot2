// import { streamText, Message } from "ai";
// import { createGoogleGenerativeAI } from "@ai-sdk/google";
// import { initialMessage } from "../../lib/data";

// // Create Google Generative AI instance
// const google = createGoogleGenerativeAI({
//     apiKey: process.env.GEMINI_API_KEY || "",
// });

// export const runtime = "edge";

// // Function to generate a unique ID
// const generateId = () => Math.random().toString(36).slice(2, 15);

// interface Flight {
//     Airline: string;
//     "Flight Number": string;
//     Price: string;
//     Departure: string;
//     Arrival: string;
//     "Departure Time": string;
//     "Arrival Time": string;
// }

// const isFlightRelatedQuery = (query: string): boolean => {
//     // Define keywords related to flights, bookings, or air travel
//     const flightKeywords = ["book a flight", "flight price", "flights", "plane", "airplane", "go by flight", "air travel", "plane tickets"];
    
//     // Check if the query contains any of the keywords (case insensitive)
//     return flightKeywords.some(keyword => query.toLowerCase().includes(keyword.toLowerCase()));
// };

// // Build the Google Generative AI prompt
// const buildGoogleGenAIPrompt = (messages: Message[], flightDetails: any[]): Message[] => [
//     {
//         id: generateId(),
//         role: "user",
//         content: initialMessage.content,
//     },
//     ...messages.map((message) => ({
//         id: message.id || generateId(),
//         role: message.role,
//         content: message.content,
//     })),
//     {
//         id: generateId(),
//         role: "user",
//         content: `Here are the available flight options: 
//         ${flightDetails.map((flight: any, index: number) => 
//             `${index + 1}. Airline: ${flight.Airline}, Flight: ${flight['Flight Number']}, Price: ${flight.Price}, Departure: ${flight.Departure}, Arrival: ${flight.Arrival}, Departure Time: ${flight['Departure Time']}, Arrival Time: ${flight['Arrival Time']}`).join('\n')}
        
//         Displaying the top 5 flight options to user in proper format. After displaying the options, if user asks other than showing prices then the chatbot should be able to answer the user query.`,
//     },
// ];


// const buildGoogleGenAIPrompt2 = (messages: Message[]): Message[] => [
//     {
//         id: generateId(),
//         role: "user",
//         content: initialMessage.content,
//     },
//     ...messages.map((message) => ({
//         id: message.id || generateId(),
//         role: message.role,
//         content: message.content,
//     })),
// ];

// // Function to fetch flight details from the flight API
// async function fetchFlightData(query: string): Promise<any> {
//     const flightAPIEndpoint = `http://localhost:8000/api/plane?ans=${encodeURIComponent(query)}`;
    
//     const response = await fetch(flightAPIEndpoint);
//     if (!response.ok) {
//         throw new Error('Failed to fetch flight data');
//     }

//     const data = await response.json();
//     const flightArray = Object.values(data.response);
    
//     return flightArray;
// }

// export async function POST(request: Request) {
//     const { messages } = await request.json();
//     const userQuery = messages[messages.length - 1]?.content; // Get the last user message

//     try {
//         // Step 1: Check if the user query is related to flights
//         if (isFlightRelatedQuery(userQuery)) {
//             // Step 2: Fetch flight data based on the user query if it's flight-related
//             const flightDetails = await fetchFlightData(userQuery);

//             // Step 3: Build the prompt with flight data and the user query
//             const prompt = buildGoogleGenAIPrompt(messages, flightDetails);

//             // Step 4: Call the Gemini model with the constructed prompt
//             const stream = await streamText({
//                 model: google("gemini-2.0-flash-exp"),
//                 messages: prompt,
//                 temperature: 0.7,
//             });

//             // Handle the response from Gemini
//             const response = await stream?.toDataStreamResponse();
//             return response;
//         } else {
//             // If the query is not related to flights, just call Gemini normally
//             const stream = await streamText({
//                 model: google("gemini-2.0-flash-exp"),
//                 messages: buildGoogleGenAIPrompt2(messages), // Pass empty flight data
//                 temperature: 0.7,
//             });

//             // Handle the normal response
//             const response = await stream?.toDataStreamResponse();
//             return response;
//         }

//     } catch (error) {
//         console.error('Error fetching flight data or calling Gemini:', error);
//         return new Response('At this moment, I cannot fetch flight data. Please write your query again.', {
//             status: 500,
//         });
//     }
// }


// import { streamText, Message } from "ai";
// import { createGoogleGenerativeAI } from "@ai-sdk/google";
// import { initialMessage } from "../../lib/data";

// const google = createGoogleGenerativeAI({
//     apiKey: process.env.GEMINI_API_KEY || "",
// });

// export const runtime = "edge";

// const generateId = () => Math.random().toString(36).slice(2, 15);

// const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
//     {
//         id: generateId(),
//         role: "user",
//         content: initialMessage.content
//     },
//     ...messages.map((message) => ({
//     id: message.id || generateId(), 
//     role: message.role,
//     content: message.content,
//     })),
// ];

// export async function POST(request: Request) {
//     const { messages } = await request.json();
//     const stream = await streamText({
//         model: google("gemini-2.0-flash-exp"),
//         messages: buildGoogleGenAIPrompt(messages),
//         temperature: 0.7,
//     });
//     return stream?.toDataStreamResponse();
// }



import { streamText, Message } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage35 } from "../../lib/freeModelPrompt";
import { initialMessage4o } from "../../lib/AURA_4o";
import { initialMessageXR } from "../../lib/AURA_XR";
interface initialMessage {
    role: string;
    content: string;
}
import { cp } from "fs";


// Create Google Generative AI instance
const google = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY || "",
});

export const runtime = "edge";

// Function to generate a unique ID
const generateId = () => Math.random().toString(36).slice(2, 15);

interface Flight {
    Airline: string;
    "Flight Number": string;
    Price: string;
    Departure: string;
    Arrival: string;
    "Departure Time": string;
    "Arrival Time": string;
}

// Check if the query is related to flights
const isFlightRelatedQuery = (query: string): boolean => {
    const flightKeywords = [
        "book a flight", "flight price", "flights", "plane",
        "airplane", "go by flight", "air travel", "plane tickets"
    ];
    return flightKeywords.some(keyword => query.toLowerCase().includes(keyword.toLowerCase()));
};

// Check if all required fields are provided
const hasRequiredFlightDetails = (messages: Message[]): { isComplete: boolean, missingFields: string[] } => {
    const requiredFields = { source: false, destination: false, date: false };
    const missingFields: string[] = [];

    messages.forEach((message) => {
        const content = message.content.toLowerCase();
        if (content.includes("from") || content.includes("departure")) requiredFields.source = true;
        if (content.includes("to") || content.includes("destination")) requiredFields.destination = true;
        if (content.match(/\b\d{1,2}(?:st|nd|rd|th)?\s+(january|february|march|april|may|june|july|august|september|october|november|december)\b/i)) requiredFields.date = true;
    });

    if (!requiredFields.source) missingFields.push("source");
    if (!requiredFields.destination) missingFields.push("destination");
    if (!requiredFields.date) missingFields.push("date");

    return { isComplete: Object.values(requiredFields).every(Boolean), missingFields };
};

// Build prompt for flight-related responses
const buildGoogleGenAIPrompt = (messages: Message[],initialMessage: initialMessage, flightDetails: Flight[]): Message[] => [
    {
        id: generateId(),
        role: "user",
        content: initialMessage.content,
    },
    ...messages.map((message) => ({
        id: message.id || generateId(),
        role: message.role,
        content: message.content,
    })),
    {
        id: generateId(),
        role: "user",
        content: `Here are the available flight options: 
        ${flightDetails.map((flight, index) => 
            `${index + 1}. Airline: ${flight.Airline}, Flight: ${flight['Flight Number']}, Price: ${flight.Price}, Departure: ${flight.Departure}, Arrival: ${flight.Arrival}, Departure Time: ${flight['Departure Time']}, Arrival Time: ${flight['Arrival Time']}`).join('\n')}\n\n` +
        `Displaying the top 5 flight options to the user in proper format. If the user asks questions unrelated to prices, the chatbot should handle those queries.`,
    },
];

// Build a general prompt
const buildGoogleGenAIPrompt2 = (messages: Message[], initialMessage: initialMessage): Message[] => [
    {
        id: generateId(),
        role: "user",
        content: initialMessage.content,
    },
    ...messages.map((message) => ({
        id: message.id || generateId(),
        role: message.role,
        content: message.content,
    })),
];

// Fetch flight data from API
async function fetchFlightData(query: string): Promise<Flight[]> {
    const flightAPIEndpoint = `http://localhost:8000/api/plane?ans=${encodeURIComponent(query)}`;

    const response = await fetch(flightAPIEndpoint);
    if (!response.ok) {
        throw new Error('Failed to fetch flight data');
    }

    const data = await response.json();
    return Object.values(data.response) as Flight[];
}

// Main handler for POST requests
export async function POST(request: Request) {
    const { messages, model } = await request.json();
    console.log('Selected model:', model);
    let initialMessage;

  // Choose the appropriate prompt based on the model
    switch (model) {
        case "AURA-3.5":
        initialMessage = initialMessage35;
        break;
        case "AURA-4o":
        initialMessage = initialMessage4o;
        break;
        case "AURA-XR":
        initialMessage = initialMessageXR;
        break;
        default:
        initialMessage = initialMessage35; // Default to AURA-XR if no model is matched
    }
    const userQuery = messages[messages.length - 1]?.content;

    try {
        // Step 1: Check if the query is related to flights
        if (isFlightRelatedQuery(userQuery) && model !== "AURA-3.5") {
            // Step 2: Check if all required flight details are provided
            const { isComplete, missingFields } = hasRequiredFlightDetails(messages);
            const flightFlag = true;
            console.log('Is complete:', isComplete, 'Missing fields:', missingFields);

            if (!isComplete) {
                // Respond with a missing details prompt
                const missingFieldsPrompt = `It looks like you're trying to book a flight, but I’m missing some important details to proceed. I need the following information: ${missingFields.join(", ")}. Could you please provide them all together in one message? For example: (in bold)"Book a plane from Ahmedabad to Goa on 14th October." This will help me assist you more efficiently.`;
            
                console.log('Missing fields:', missingFields);
            
                const result = streamText({
                    model: google("gemini-2.0-flash-exp"),
                    system: 'You are a helpful assistant. Politely explain that the user needs to provide all necessary details to proceed with the booking in one message. Mention that the user should include all missing fields (e.g., source, destination, and date) in a single query. Provide an example: "Book a plane from Ahmedabad to Goa on 14th October."',
                    prompt: missingFieldsPrompt,
                });
            
                return result.toDataStreamResponse();
            } else {                
                console.log('Flight related query:', userQuery);
            // Step 3: Fetch flight data
            const flightDetails = await fetchFlightData(userQuery);

            // Step 4: Build the prompt and call Gemini
            const prompt = buildGoogleGenAIPrompt(messages,initialMessage, flightDetails);
            const stream = await streamText({
                model: google("gemini-2.0-flash-exp"),
                messages: prompt,
                temperature: 0.7,
            });

            // Step 5: Return response
            return stream?.toDataStreamResponse();
            }
        } else if (isFlightRelatedQuery(userQuery) && model == "AURA-3.5") {
            const stream = await streamText({
                model: google("gemini-2.0-flash-exp"),
                messages: buildGoogleGenAIPrompt2(messages, initialMessage),
                temperature: 0.7,
            });

            return stream?.toDataStreamResponse();
        } else {
            // For non-flight-related queries, use a general prompt
            console.log('Non-flight related query:', userQuery);
            const stream = await streamText({
                model: google("gemini-2.0-flash-exp"),
                messages: buildGoogleGenAIPrompt2(messages, initialMessage),
                temperature: 0.7,
            });

            return stream?.toDataStreamResponse();
        }
    } catch (error) {
        console.error('Error fetching flight data or calling Gemini:', error);

        // Return user-friendly error message
        return new Response(JSON.stringify({
            messages: [
                ...messages,
                { id: generateId(), role: "bot", content: "At this moment, I cannot fetch flight data. Please try again later." },
            ],
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
