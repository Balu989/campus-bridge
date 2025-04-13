// UploadMaterial.jsx

import React, { useState } from "react";
import {
  Card, CardContent, Typography, Grid, Button,
  MenuItem, Select, InputLabel, FormControl,
  TextField, IconButton, Box
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from '@mui/system';
import API from "../../services/api";

const FileInput = styled("input")({
  display: "none",
});

const UploadMaterial = () => {
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploaded = Array.from(event.target.files);
    setFiles(prev => [...prev, ...uploaded]);
  };

  const handleDelete = (index) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  };

  const handleSubmit = async () => {
    if (!department || !course || files.length === 0) {
      alert("Please fill in all fields and upload at least one file.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    formData.append("department", department);
    formData.append("course", course);

    try {
      await API.post("/materials/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Files uploaded successfully!");
      setFiles([]);
      setCourse("");
      setDepartment("");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload files. Please try again.");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Upload Learning Materials
          </Typography>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Department</InputLabel>
                <Select
                  value={department}
                  label="Department"
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <MenuItem value="CSE">CSE</MenuItem>
                  <MenuItem value="ECE">ECE</MenuItem>
                  <MenuItem value="ME">ME</MenuItem>
                  <MenuItem value="CE">CE</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="file-upload">
                <FileInput
                  id="file-upload"
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                />
                <Button variant="contained" component="span" startIcon={<UploadIcon />}>
                  Upload Files
                </Button>
              </label>
            </Grid>

            {files.length > 0 && (
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  Uploaded Files:
                </Typography>
                {files.map((file, index) => (
                  <Box key={index} display="flex" alignItems="center" justifyContent="space-between" mt={1}>
                    <Typography>{file.name}</Typography>
                    <Box>
                      <IconButton onClick={() => alert("Download not implemented yet")}>
                        <DownloadIcon />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={handleSubmit}
              >
                Submit Materials
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UploadMaterial;
