"use client";
import { useState } from "react";
import {
  AiOutlineSend,
  AiOutlinePaperClip,
  AiOutlinePlus,
  AiOutlineSave,
  AiOutlineCopy,
} from "react-icons/ai";
import ReactMarkdown from 'react-markdown';
export default function ChatBotGold() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
    { text: "What are your services?", sender: "user" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSend = async () => {
    if (newMessage.trim() !== "") {
      // Add user's message to messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, sender: "user" },
      ]);

      // Set loading to true
      setIsLoading(true);

      // Fetch bot response
      const response = await fetch("https://chatbot-backend-yr1g.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ans: newMessage, // User's message
          bot: "bot2",     // Specify which bot you want to use
        }),
      });
      console.log(response)

      // Handle response
      if (response.ok) {
        
        const data = await response.json();
        console.log(data)
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.candidates[0].content.parts[0].text, sender: "bot" },
        ]);
      } else {
        console.error("Error sending message", response.statusText);
      }

      // Clear input field and stop loading
      setNewMessage("");
      setIsLoading(false);
    }
  };

  return (
    <div className="items-center outfit mesh-gold bg-white mt-10 min-h-screen flex flex-col justify-center">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center mb-5">
        <h5 className="text-xl md:text-3xl text-center tracking-tight text-[var(--g)] font-medium">
          Trippo Gold
        </h5>
        <h3 className="text-2xl md:text-4xl text-center bg-gradient-to-r from-[hsla(47,100%,77%,1)] via-[#e0aa3e)] to-[#e0aa3e] bg-clip-text text-transparent mb-5 mx-5 font-semibold tracking-tighter">
          Advanced AI-Assisted Travel Advisor
        </h3>
      </div>

      {/* Icons for New Chat and Save Chat */}
      <div className="flex justify-end w-[90%] md:w-[60%] mb-2">
        {/* New Chat Icon */}
        <button className="relative text-[var(--g)] hover:text-[var(--b)] mr-4">
          <AiOutlinePlus className="h-6 w-6" />
          <span className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block">
            New Chat
          </span>
        </button>

        {/* Save Chat Icon */}
        <button className="relative text-[var(--g)] hover:text-[var(--b)]">
          <AiOutlineSave className="h-6 w-6" />
          <span className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs rounded px-2 py-1 hidden group-hover:block">
            Save Chat
          </span>
        </button>
      </div>

      {/* Chat Container with Fixed Height */}
      <div className="flex flex-col rounded-3xl mx-20 bg-white border-gray-200 border-[0.5px] shadow-black/10 shadow-2xl w-[90%] md:w-[70%] h-[500px] md:h-[600px]">
        {/* Chat messages area with overflow scrolling */}
        <div className="flex-1 overflow-y-auto md:p-4 p-2 bg-opacity-10 mesh-light backdrop-blur-xl rounded-t-3xl transition-all duration-500 ease-in-out">
          <div className=" mx-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 md:p-3 p-2 rounded-xl border-[0.5px] border-gray-300 md:max-w-[60%] max-w-[90%] relative group transition-transform duration-300 ease-in-out ${
                  msg.sender === "user"
                    ? "bg-white text-[var(--g)] self-end ml-auto animate-slideUp"
                    : "bg-white text-[#e0aa3e] animate-slideDown"
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>

                {/* Copy Icon (visible on hover) */}
                {msg.sender === "bot" && (
                  <button className="absolute top-1/2 right-[-35px] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--g)] hover:text-[var(--b)]">
                    <AiOutlineCopy className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <div className="bg-white border-t border-gray-200 px-4 py-2 flex items-center rounded-b-3xl">
          {/* Upload Icon */}
          <button className="text-[var(--g)] hover:text-[var(--b)] transition-colors duration-200">
            <AiOutlinePaperClip className="h-6 w-6" />
          </button>

          {/* Text Input */}
          <input
            type="text"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 mx-4 py-2 px-4 bg-[var(--llg)] outline-none focus:outline-none rounded-full text-[var(--g)] md:text-xl text-lg transition-all duration-300 ease-in-out"
          />
          {/* Send Icon */}
          <button
            onClick={handleSend}
            className="text-[var(--g)] hover:text-[var(--b)] duration-200"
          >
            <AiOutlineSend className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* <h5 className="text-md md:text-2xl text-center p-4 tracking-tight text-[var(--g)] font-medium">
        Want better results? Try Our new{" "}
        <a className="text-[var(--b)] hover:text-[var(--gr)] cursor-pointer rounded-xl bg-none">
          Trippo GOLD
        </a>
      </h5> */}
    </div>
  );
}