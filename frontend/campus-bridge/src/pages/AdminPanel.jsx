// /pages/AdminPanel.jsx
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Grid,
  Box,
} from "@mui/material";

const sections = [
  {
    title: "📊 Platform Analytics",
    color: "text-blue-600",
    content: (
      <>
        <p className="mt-2">• 1240 users registered</p>
        <p>• 87% course completion rate</p>
        <p>• Top course: Web Dev Bootcamp</p>
      </>
    ),
  },
  {
    title: "👥 User Management",
    color: "text-green-600",
    content: (
      <div className="mt-3 space-y-2">
        <Button variant="outlined" color="primary" fullWidth>
          View All Users
        </Button>
        <Button variant="outlined" color="secondary" fullWidth>
          Promote to Faculty
        </Button>
      </div>
    ),
  },
  {
    title: "📝 Mock Test Scheduler",
    color: "text-purple-600",
    content: (
      <Button
        className="mt-3"
        variant="contained"
        color="primary"
        sx={{ textTransform: "none" }}
      >
        Schedule New Test
      </Button>
    ),
  },
  {
    title: "📄 Reports & Logs",
    color: "text-red-600",
    content: (
      <Button
        className="mt-3"
        variant="outlined"
        color="error"
        sx={{ textTransform: "none" }}
      >
        Download Reports
      </Button>
    ),
  },
];

function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Typography
            variant="h4"
            className="font-bold text-blue-800 dark:text-blue-300 mb-6"
          >
            🧩 Dashboard Overview
          </Typography>

          <Grid container spacing={4}>
            {sections.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  className="shadow-md hover:shadow-xl transition-shadow"
                  sx={{ borderRadius: "1rem" }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      className={`${section.color} mb-2 font-semibold`}
                    >
                      {section.title}
                    </Typography>
                    <Divider />
                    <Box mt={2}>{section.content}</Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
