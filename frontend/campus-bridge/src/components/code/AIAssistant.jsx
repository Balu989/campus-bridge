// /components/code/AIAssistant.jsx
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

function AIAssistant() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    // Later we’ll fetch from backend or Gemini/GPT
    setResponse("🧠 AI Bot: This is a placeholder response for your query.");
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md flex flex-col gap-4 h-full">
      <Typography variant="h6" className="text-indigo-700 font-bold">
        🤖 AI Assistant
      </Typography>

      <TextField
        label="Ask for code help"
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAsk}
      >
        Ask
      </Button>

      {response && (
        <div className="bg-white p-3 rounded border text-sm text-gray-700">
          {response}
        </div>
      )}
    </div>
  );
}

export default AIAssistant;
