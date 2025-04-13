// /components/code/GroupRoom.jsx
import { useState } from "react";
import { TextField, Button, Typography, Avatar } from "@mui/material";

function GroupRoom() {
  const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoinRoom = () => {
    // Placeholder for socket connection logic
    setJoined(true);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <Typography variant="h6" className="text-blue-700 font-bold">
        👥 Join a Group Code Room
      </Typography>

      <TextField
        label="Room ID"
        fullWidth
        variant="outlined"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleJoinRoom}>
        {joined ? "Rejoin Room" : "Join Room"}
      </Button>

      {joined && (
        <div className="p-4 bg-gray-50 rounded border mt-4">
          <Typography variant="body1" className="font-semibold mb-2">
            Live Participants:
          </Typography>
          <div className="flex gap-2">
            <Avatar alt="You" />
            <Avatar alt="Teammate" />
          </div>
          <p className="text-sm text-gray-500 mt-2">*Live typing collaboration coming soon*</p>
        </div>
      )}
    </div>
  );
}

export default GroupRoom;
