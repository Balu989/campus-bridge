import React, { useState } from "react";
import { Tabs, Tab, Avatar, Typography, Box } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { ChatBubbleOutline } from "@mui/icons-material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const mockTeam = [
  { name: "Alice", role: "Driver", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Bob", role: "Navigator", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Charlie", role: "Reviewer", avatar: "https://i.pravatar.cc/150?img=3" },
];

const messages = [
  { sender: "Alice", text: "Let’s set up the function first." },
  { sender: "Bob", text: "I’ll handle the API call part." },
];

function GroupRoom() {
  const [code, setCode] = useState("// Write your collaborative code here...");
  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <Typography variant="h4" className="font-bold text-blue-700 dark:text-blue-400 mb-4">
            👥 Group Coding Room
          </Typography>

          <Box className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            {/* Participants */}
            <div className="flex gap-4 mb-6">
              {mockTeam.map((member, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Avatar src={member.avatar} alt={member.name} />
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <Tabs
              value={tab}
              onChange={(e, newTab) => setTab(newTab)}
              textColor="primary"
              indicatorColor="primary"
              className="mb-4"
            >
              <Tab label="👨‍💻 Code Editor" />
              <Tab label={<span><ChatBubbleOutline className="mr-1" /> Team Chat</span>} />
            </Tabs>

            {/* Content */}
            {tab === 0 ? (
              <CodeMirror
                value={code}
                height="400px"
                extensions={[javascript()]}
                theme="dark"
                onChange={(val) => setCode(val)}
              />
            ) : (
              <div className="h-96 overflow-y-auto bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-sm">
                {messages.map((msg, idx) => (
                  <div key={idx} className="mb-2">
                    <span className="font-semibold text-blue-600 dark:text-blue-300">{msg.sender}: </span>
                    <span>{msg.text}</span>
                  </div>
                ))}
              </div>
            )}
          </Box>
        </main>
      </div>
    </div>
  );
}

export default GroupRoom;
