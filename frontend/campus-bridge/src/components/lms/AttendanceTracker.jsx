// AttendanceTracker.jsx

import React, { useState } from "react";
import {
  Box, Card, CardContent, Typography,
  Grid, FormControlLabel, Checkbox,
  Button, Accordion, AccordionSummary, AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import API from "../../services/api";

const AttendanceTracker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [attendance, setAttendance] = useState({});
  const [expanded, setExpanded] = useState(false);

  const courses = [
    {
      course: "DSA",
      students: ["Alice", "Bob", "Charlie"],
    },
    {
      course: "OOP",
      students: ["David", "Eve", "Frank"],
    },
  ];

  const handleCheckboxChange = (course, student) => {
    setAttendance((prev) => ({
      ...prev,
      [course]: {
        ...prev[course],
        [student]: !prev?.[course]?.[student],
      },
    }));
  };

  const handleSubmit = async () => {
    if (!selectedDate || Object.keys(attendance).length === 0) {
      alert("Please select a date and mark attendance.");
      return;
    }

    const date = selectedDate.format("YYYY-MM-DD");
    const attendanceEntries = [];

    for (const course in attendance) {
      for (const student in attendance[course]) {
        attendanceEntries.push({
          studentName: student,
          courseName: course,
          date,
          present: attendance[course][student],
        });
      }
    }

    try {
      for (const entry of attendanceEntries) {
        await API.post("/attendance/mark", entry);
      }
      alert("Attendance submitted successfully!");
      setAttendance({});
    } catch (error) {
      console.error("Error submitting attendance:", error);
      alert("Failed to submit attendance. Please try again.");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Mark Student Attendance
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newVal) => setSelectedDate(newVal)}
              sx={{ mt: 2, mb: 3 }}
            />
          </LocalizationProvider>

          {courses.map((c, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === idx}
              onChange={() => setExpanded(expanded === idx ? false : idx)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">{c.course}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {c.students.map((student, i) => (
                    <Grid item xs={6} sm={4} key={i}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={attendance[c.course]?.[student] || false}
                            onChange={() => handleCheckboxChange(c.course, student)}
                          />
                        }
                        label={student}
                      />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            fullWidth
            onClick={handleSubmit}
          >
            Submit Attendance
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AttendanceTracker;
