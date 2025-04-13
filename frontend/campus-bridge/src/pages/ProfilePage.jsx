import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Paper,
  Button,
  Grid,
  TextField,
  Chip,
  IconButton,
  CircularProgress,
  Box
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ProfilePage() {
  const sampleProfile = {
    avatar: "https://via.placeholder.com/100",
    fullName: "Ruthvik Sai",
    email: "ruthviktalapaneni@gmail.com",
    role: "Developer",
    bio: "A passionate developer always looking for challenges.",
    skills: ["JavaScript", "React", "Node.js", "CSS"],
    resumeName: ""
  };

  const [profile, setProfile] = useState(sampleProfile);
  const [editing, setEditing] = useState(false);
  const [file, setFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setResumeUrl(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      const updatedProfile = {
        ...profile,
        bio: profile.bio,
        resumeName: file ? file.name : profile.resumeName
      };
      setProfile(updatedProfile);
      setEditing(false);
      setFile(null);
      setResumeUrl(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6 flex-1 overflow-auto">
          <Paper elevation={8} className="p-8 rounded-3xl shadow-xl dark:bg-gray-800">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4} className="text-center">
                <Avatar
                  src={profile.avatar}
                  alt={profile.fullName}
                  sx={{ width: 120, height: 120, border: "4px solid #3f51b5" }}
                />
                <Typography variant="h5" className="mt-4 dark:text-white">
                  {profile.fullName}
                </Typography>
                <Typography className="text-gray-700 dark:text-gray-400">{profile.role}</Typography>
              </Grid>

              <Grid item xs={12} md={8}>
                <div className="flex justify-between items-center">
                  <Typography variant="h5" className="font-semibold dark:text-white">
                    Profile Details
                  </Typography>
                  <IconButton onClick={() => setEditing(!editing)} color="primary">
                    <EditIcon />
                  </IconButton>
                </div>

                <Grid container spacing={3} className="mt-4">
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      value={profile.email}
                      disabled
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Role"
                      variant="outlined"
                      value={profile.role}
                      disabled
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {editing ? (
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Bio"
                        variant="outlined"
                        value={profile.bio || ""}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            bio: e.target.value
                          }))
                        }
                        helperText="Share a brief description about yourself"
                      />
                    ) : (
                      <Typography variant="body1" className="dark:text-gray-300">
                        {profile.bio}
                      </Typography>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6" className="mb-2 font-medium dark:text-white">
                      Skills
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={2}>
                      {profile.skills.map((skill, idx) => (
                        <Chip key={idx} label={skill} color="primary" sx={{ borderRadius: "16px" }} />
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" className="mb-2 font-medium dark:text-white">Resume</Typography>
                    {file || profile.resumeName ? (
                      <Typography className="text-sm dark:text-gray-300">
                        <a
                          href={file ? resumeUrl : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {file ? file.name : profile.resumeName}
                        </a>
                      </Typography>
                    ) : (
                      <Typography className="text-sm text-gray-500 italic">No resume uploaded</Typography>
                    )}
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Button
                      variant="outlined"
                      startIcon={<UploadFileIcon />}
                      component="label"
                      color="primary"
                    >
                      Upload Resume
                      <input type="file" hidden onChange={handleResumeUpload} />
                    </Button>
                  </Grid>

                  {editing && (
                    <Grid item xs={12} className="text-right">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        disabled={loading}
                      >
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Save Changes"}
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
