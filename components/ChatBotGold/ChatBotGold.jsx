"use client";
import { useState } from "react";
import { useChat } from "@ai-sdk/react"

export default function ChatBotGold() {
  // const [messages, setMessages] = useState([]);
  // const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const formatBotMessage = (text) => {
    // Replace markdown-style formatting with HTML/JSX tags
    return (
      <div>
  {text.split("\n").map((line, index) => {
    // Add bullets or arrows for lines starting with *
    const formattedLine = line
      .replace(/^\*\s(\*\*(.*?)\*\*)/, "• <strong>$2</strong>") // Bullet + bold text
      .replace(/^\*\s/, "• ") // Bullet for single *
      //.replace(/^\*\s(\*\*(.*?)\*\*)/, "-> <strong>$2</strong>") // Arrow + bold text
      //.replace(/^\*\s/, "->") // Arrow for single *
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text (**bold**)
      .replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italic text (*italic*)

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
    );
  };


  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    reload,
    еггог,
    } = useChat({ api: "/api/genai" });

    
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!input.trim()) return;

  //   // Add user message
  //   setMessages((prev) => [...prev, { role: "user", content: input }]);
  //   setInput("");
  //   setIsTyping(true);

  //   try {
  //     // Fetch and stream chatbot's response
  //     const response = await fetch("/api/genai", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ prompt: input }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Error fetching response from server");
  //     }

  //     const reader = response.body.getReader();
  //     let decoder = new TextDecoder("utf-8");
  //     let partialMessage = "";

  //     while (true) {
  //       const { done, value } = await reader.read();
  //       if (done) break;

  //       partialMessage += decoder.decode(value);
  //       setMessages((prev) => {
  //         const newMessages = [...prev];
  //         // Update typing message while streaming
  //         if (isTyping) {
  //           newMessages[newMessages.length - 1] = {
  //             role: "bot",
  //             content: partialMessage,
  //           };
  //         } else {
  //           // Add new bot message once complete
  //           newMessages.push({ role: "bot", content: partialMessage });
  //           setIsTyping(false); // End typing indicator
  //         }
  //         return newMessages;
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setMessages((prev) => [
  //       ...prev,
  //       { role: "bot", content: "Sorry, something went wrong. Please try again." },
  //     ]);
  //     setIsTyping(false); // End typing indicator on error
  //   }
  // };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          height: "400px",
          overflowY: "scroll",
          marginTop: '7rem'
        }}
      >
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{ textAlign: msg.role === "user" ? "right" : "left" }}
          >
            <strong>{msg.role === "user" ? "You:" : "Bot:"}</strong>
            {formatBotMessage(msg.content)} 
            {/* {msg.content} */}
          </p>
        ))}
        {isTyping && <p>Bot is typing...</p>}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
