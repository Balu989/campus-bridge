import React, { useState, useRef, useEffect } from "react";
import {
  Paper,
  TextField,
  IconButton,
  Chip,
  Typography
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

SyntaxHighlighter.registerLanguage("javascript", javascript);

const suggestions = [
  "Explain this code",
  "Optimize this function",
  "Give logic for bubble sort",
  "What is closure in JavaScript?",
  "Convert Python to Java"
];

function AIAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const newUserMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
  
    // ⏳ Add a temporary loading message
    const loadingMessage = { type: "ai", text: "🤖 Thinking..." };
    setMessages((prev) => [...prev, loadingMessage]);
  
    try {
      const res = await axios.post("http://localhost:8080/api/ai/chat", {
        prompt: input
      });
  
      // Remove loading message
      setMessages((prev) => prev.slice(0, -1));
  
      if (res.data.reply) {
        const reply = res.data.reply;
        setMessages((prev) => [...prev, { type: "ai", text: reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { type: "ai", text: "❌ No reply from AI. Please try again later." }
        ]);
      }
    } catch (error) {
      console.error("AI Error:", error);
      // Remove loading message
      setMessages((prev) => prev.slice(0, -1));
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "❌ Failed to fetch AI response. Try again later." }
      ]);
    }
  };
  


  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);

  const handlePromptClick = (prompt) => {
    setInput(prompt);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Navbar />

        <main className="flex-grow p-6 overflow-auto">
          <Typography
            variant="h4"
            className="text-blue-700 dark:text-blue-400 font-bold mb-4"
          >
            🤖 AI Coding Assistant
          </Typography>

          <div className="flex flex-wrap gap-2 mb-4">
            {suggestions.map((prompt, idx) => (
              <Chip
                key={idx}
                label={prompt}
                clickable
                color="primary"
                onClick={() => handlePromptClick(prompt)}
              />
            ))}
          </div>

          <Paper
            className="h-[60vh] overflow-y-auto p-4 mb-4 bg-white dark:bg-gray-800"
            ref={chatRef}
          >
            {loading && (
              <div className="text-left mb-2">
                <div className="inline-block px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 animate-pulse">
                  Generating response...
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 ${msg.type === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg max-w-[80%] whitespace-pre-wrap ${msg.type === "user"
                      ? "bg-blue-100 text-blue-900 dark:bg-blue-600 dark:text-white"
                      : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                >
                  {msg.text.includes("function") || msg.text.includes("{") ? (
                    <SyntaxHighlighter language="javascript" style={atomOneDark}>
                      {msg.text}
                    </SyntaxHighlighter>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
          </Paper>


          <div className="flex gap-2">
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Ask me anything about code..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <IconButton color="primary" onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AIAssistant;
