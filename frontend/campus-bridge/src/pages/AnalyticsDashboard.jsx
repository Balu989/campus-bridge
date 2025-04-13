import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button
} from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell,
} from "recharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Custom Components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const students = ["Balu", "Bhavani", "Ruthvik", "Mahir"];

const progressDataMap = {
  Balu: [
    { name: "React Course", progress: 85 },
    { name: "Java Basics", progress: 70 },
    { name: "Data Structures", progress: 55 },
  ],
  Bhavani: [
    { name: "React Course", progress: 90 },
    { name: "Java Basics", progress: 60 },
    { name: "Data Structures", progress: 40 },
  ],
  Ruthvik: [
    { name: "React Course", progress: 50 },
    { name: "Java Basics", progress: 80 },
    { name: "Data Structures", progress: 60 },
  ],
  Mahir: [
    { name: "React Course", progress: 95 },
    { name: "Java Basics", progress: 85 },
    { name: "Data Structures", progress: 90 },
  ]
};

const codingActivityMap = {
  Balu: [
    { day: "Mon", problems: 3 },
    { day: "Tue", problems: 5 },
    { day: "Wed", problems: 2 },
    { day: "Thu", problems: 6 },
    { day: "Fri", problems: 4 },
  ],
  Bhavani: [
    { day: "Mon", problems: 4 },
    { day: "Tue", problems: 3 },
    { day: "Wed", problems: 5 },
    { day: "Thu", problems: 2 },
    { day: "Fri", problems: 6 },
  ],
  Ruthvik: [
    { day: "Mon", problems: 1 },
    { day: "Tue", problems: 3 },
    { day: "Wed", problems: 2 },
    { day: "Thu", problems: 4 },
    { day: "Fri", problems: 3 },
  ],
  Mahir: [
    { day: "Mon", problems: 5 },
    { day: "Tue", problems: 5 },
    { day: "Wed", problems: 6 },
    { day: "Thu", problems: 5 },
    { day: "Fri", problems: 7 },
  ]
};

const pieDataMap = {
  Balu: [
    { name: "LMS", value: 60 },
    { name: "Coding", value: 40 },
  ],
  Bhavani: [
    { name: "LMS", value: 70 },
    { name: "Coding", value: 30 },
  ],
  Ruthvik: [
    { name: "LMS", value: 50 },
    { name: "Coding", value: 50 },
  ],
  Mahir: [
    { name: "LMS", value: 45 },
    { name: "Coding", value: 55 },
  ]
};

const COLORS = ["#8884d8", "#82ca9d"];

function AnalyticsDashboard() {
  const [selectedStudent, setSelectedStudent] = useState("Balu");

  const handleDownload = async () => {
    const input = document.getElementById("dashboard-section");
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${selectedStudent}_analytics.pdf`);
  };

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-9">
          <Typography variant="h4" className="font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
            📊 Student Analytics Dashboard
          </Typography>

          {/* Student Selector & Export Button */}
          <Grid container spacing={2} alignItems="center" justifyContent="center" className="mb-6">
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Select Student"
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                variant="outlined"
              >
                {students.map((student) => (
                  <MenuItem key={student} value={student}>
                    {student}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button fullWidth variant="contained" color="primary" onClick={handleDownload}>
                Download PDF
              </Button>
            </Grid>
          </Grid>

          {/* Dashboard Section for Export */}
          <div id="dashboard-section">
            <Grid container spacing={4} justifyContent="center">
              {/* LMS Progress Bar Chart */}
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      LMS Course Completion
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={progressDataMap[selectedStudent]}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="progress" fill="#1976d2" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Coding Practice Line Chart */}
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Coding Activity (Problems Solved)
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={codingActivityMap[selectedStudent]}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="problems" stroke="#00bfa5" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Pie Chart for Time Spent */}
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Time Spent: LMS vs Coding
                    </Typography>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie data={pieDataMap[selectedStudent]} dataKey="value" nameKey="name" outerRadius={100} label>
                          {pieDataMap[selectedStudent].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
