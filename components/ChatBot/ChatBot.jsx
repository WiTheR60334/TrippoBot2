"use client";
import { useState } from "react";
import { AiOutlineSend, AiOutlinePaperClip } from "react-icons/ai";
import Accordion from "../Accordion/Accordion";
import "./ChatBot.css";

export default function ChatBot() {
  const handleGold = () => {
    window.location.href = "/chat-gold";
  };

  const [selectedModel, setSelectedModel] = useState("AURA-3.5");

  // State for new message input
  const [newMessage, setNewMessage] = useState("");

  // State to toggle suggestions visibility
  const [showSuggestions, setShowSuggestions] = useState(true);

  // State for messages (chat history)
  const [messages, setMessages] = useState([]);

  // State to manage loading state
  const [isLoading, setIsLoading] = useState(false);

  // Suggestions array
  const suggestions = [
    "What is the best time to visit Paris?",
    "Can you recommend a travel itinerary?",
    "How do I book a flight?",
    "What are the top attractions in Tokyo?",
  ];

  const formatBotMessage = (text) => {
    // Replace markdown-style formatting with HTML/JSX tags
    return (
      <div className="logoContainer">
              <div className="logo">
                <img src="/images/ai_bot.png" alt="AI Bot Logo" />
              </div>
      <div className="logoLEFT">
        {text.split("\n").map((line, index) => {
          // Handle bold text (**bold**)
          const formattedLine = line
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>"); // Handle italic text (*italic*)

          return (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: formattedLine }}
              style={{
                marginBottom: "10px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            />
          );
        })}
      </div>
      </div>
    );
  };

  const handleSend = async () => {
    if (newMessage.trim() !== "") {
      // Add user's message to messages immediately
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, sender: "user" },
      ]);

      // Clear input field
      setNewMessage("");

      setShowSuggestions(false);

      // Show loading in the chat area
      setIsLoading(true);

      let botSelection = "bot1";

      if (selectedModel === "AURA-4o") {
        botSelection = "bot2";
      } else if (selectedModel === "AURA-XR") {
        botSelection = "bot3";
      }

      console.log(botSelection);

      // Fetch bot response
      const response = await fetch("https://chatbot-backend-yr1g.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ans: newMessage,
          bot: botSelection,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse = data.candidates[0].content.parts[0].text;

        // Add bot's response to messages
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: "bot" },
        ]);
      } else {
        console.error("Error sending message", response.statusText);
      }

      // Stop loading
      setIsLoading(false);
    }
  };

  return (
    <div className="hi items-center outfit bg-white min-h-screen mt-10 flex flex-col justify-center">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center mb-5">
        <h5 className="text-xl md:text-3xl text-center tracking-tight text-[var(--g)] font-medium">
          Trippo
        </h5>
        <h3 className="text-2xl md:text-4xl text-center bg-gradient-to-r from-[var(--lb)] via-[var(--b)] to-[var(--lb)] bg-clip-text text-transparent mb-5 mx-5 font-semibold tracking-tighter">
          Your Personal AI-Assisted Travel Advisor
        </h3>
      </div>

      {/* Chat Container */}
      <div className="chatContainer">
        <div className="models">
          <div className="gridContainer">
            <button
              className={`model-btn ${selectedModel === "AURA-3.5" ? "selected" : ""}`}
              onClick={() => setSelectedModel("AURA-3.5")}
            >
              {/* AURA (Advanced Universal Routing Assistant) */}
              AURA-3.5
            </button>
            <button
              className={`model-btn ${selectedModel === "AURA-4o" ? "selected" : ""}`}
              onClick={() => setSelectedModel("AURA-4o")}
            >
              AURA-4o
            </button>
            <button
              className={`model-btn ${selectedModel === "AURA-XR" ? "selected" : ""}`}
              onClick={() => setSelectedModel("AURA-XR")}
            >
              AURA-XR
            </button>
          </div>
        </div>
      <div className="chatArea flex flex-col rounded-3xl bg-white shadow-black/10 shadow-2xl">
        {/* Suggestions Section */}
        {showSuggestions && (
          <div className="suggestion">
            <div className="containerr">
              <div className="gridd">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setNewMessage(suggestion); // Fill input with suggestion
                      setShowSuggestions(false); // Hide suggestions on message send
                    }}
                    className="textt border border-black text-black rounded-[15px] hover:bg-[var(--g)] hover:text-white transition-all"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Chat messages area */}
        <div className="flex-1 overflow-y-auto md:p-4 p-2 bg-opacity-10 mesh-light backdrop-blur-xl rounded-t-3xl transition-all duration-500 ease-in-out">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } my-2`}
            >
              {message.sender === "bot" ? (
                <div style={{ margin: "1rem 0" }}>{formatBotMessage(message.text)}</div>
              ) : (
                <div
                  className={`py-2 px-4 rounded-lg ${
                    message.sender === "user"
                      ? "bg-[var(--b)] text-white max-w-[70%]"
                      : "bg-[var(--llg)] text-[var(--g)]"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </div>
          ))}

          {/* Loading message */}
          {isLoading && (
            <div className="logoContainer">
              <div className="logo">
                <img src="/images/ai_bot.png" alt="AI Bot Logo" />
              </div>
              <div className="text-left text-[var(--g)]">
                <span className="font-small text-small">Trippo bot is thinking...</span>
                <div className="loader border-[3px] border-[var(--b)] border-t-transparent rounded-full w-8 h-8 mx-auto mt-2 animate-spin"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Field */}
        <div className="bg-white border-t border-gray-200 px-4 py-2 flex items-center rounded-b-3xl">
          {/* Upload Icon */}
          <button className="text-[var(--g)] hover:text-[var(--b)] transition-colors duration-200">
            <AiOutlinePaperClip className="h-[1.125rem] w-[1.125rem] sm:w-6 sm:h-6" />
          </button>
          <input
            type="text"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)} // Update newMessage state
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend(); // Trigger message send on Enter key
            }}
            className="inputt flex-1 mx-1 sm:mx-4 py-2 px-4 rounded-full outline-none border-none text-[var(--g)] md:text-xl text-lg"
            style={{ outline: "none", border: "none", boxShadow: "none" }}
            />
          {/* Send Icon */}
          <button
            onClick={handleSend} // Trigger message send on button click
            className="text-[var(--g)] hover:text-[var(--b)] duration-200"
          >
            <AiOutlineSend className="h-[1.125rem] w-[1.125rem] sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
      </div>
      <div className="Suggestions">
        <div className="content">
          <div className="header5">
            Best Practices
          </div>
          <div className="header3">
            How to Leverage AI for Smart Travel Planning
          </div>
          <div className="para">
            Designed to simplify your travel planning through the strength of OpenAI's GPT models, our chatbot is a gateway to personalized, insightful travel recommendations. Follow these best practices to unlock its full potential.
          </div>
        </div>
        <div className="options">
          <div className="accordionMenu">
            <Accordion
              title="Personalize Your Itinerary with Specific Details"
              answer={`<b>Why It Helps:</b> A personalized itinerary caters to your unique preferences, ensuring a fulfilling travel experience.<br/><br/>
                      ‍<b>How to Use:</b> Share your interests, travel dates, and group details.<br/><br/>
                      <b>Example:</b> \"I'm traveling to Italy in March for 7 days with family. We love art, history, and local food. Can you suggest an itinerary?\"`}
            />
            <Accordion 
              title="Budget-Friendly Travel Suggestions"
              answer={`<b>Why It Helps:</b> Tailored budget recommendations help you manage expenses while enjoying your trip.<br/><br/>
                      ‍<b>How to Use:</b> Mention your destination, duration, and approximate budget.<br/><br/>
                      <b>Example:</b> \"Plan a 5-day budget trip to Goa under Rs 20000, including accommodation, food, and activities.\"`}
            />
            <Accordion
              title="Multi-City Exploration Plans"
              answer={`<b>Why It Helps:</b> A structured plan saves time and ensures you don’t miss highlights when visiting multiple locations.<br/><br/>
                      ‍<b>How to Use:</b> Provide details of the cities and duration for each.<br/><br/>
                      <b>Example:</b> \"Plan a 10-day Europe trip covering Paris, Rome, and Amsterdam. I have 3 days for each city.\"`}
            />
            <Accordion
              title="Discover Local Hidden Gems"
              answer={`<b>Why It Helps:</b> Gain insights into unique experiences that tourists often miss.<br/><br/>
                      ‍<b>How to Use:</b> Ask for offbeat recommendations in your destination.<br/><br/>
                      <b>Example:</b> \"What are some hidden gems in Kyoto that are not crowded by tourists?\"`}
            />
            <Accordion
              title="Language Support for Smooth Travel"
              answer={`<b>Why It Helps:</b> Overcome language barriers with phrases or translations tailored to your trip.<br/><br/>
                      ‍<b>How to Use:</b> Specify the language and your needs.<br/><br/>
                      <b>Example:</b> \"Can you provide key Spanish phrases for ordering food and asking for directions in Barcelona?\"`}
            />
            <Accordion
              title="Activities and Experiences Based on Seasons"
              answer={`<b>Why It Helps:</b> Seasonal activities enhance your travel experience by aligning with local events and weather.<br/><br/>
                      ‍<b>How to Use:</b> Mention your travel dates and preferences.<br/><br/>
                      <b>Example:</b> \"What are the best activities to do in Iceland during December? I love nature and adventure.\"`}
            />
            <Accordion
              title="Approximate Budget Estimates for Your Trip"
              answer={`<b>Why It Helps:</b> Knowing an approximate budget helps in efficient trip planning.<br/><br/>
                      ‍<b>How to Use:</b> Share your destination, travel style, and trip duration.<br/><br/>
                      <b>Example:</b> \"How much would a 3-day trip to Singapore cost for two, including mid-range hotels and meals?\"`}
            />
            <Accordion
              title="Summary of Key Highlights in a Destination"
              answer={`<b>Why It Helps:</b> Quick summaries provide a snapshot of must-visit places and activities.<br/><br/>
                      ‍<b>How to Use:</b> Ask for a short guide to your chosen destination.<br/><br/>
                      <b>Example:</b> \"Can you summarize the key attractions and activities in Sydney for a first-time visitor?\"`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
