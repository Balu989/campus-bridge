import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Avatar,
  Pagination,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    skills: ["React", "JavaScript", "CSS"],
    logo: "https://logo.clearbit.com/technova.com",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CodeCraft",
    location: "Bangalore",
    skills: ["Java", "Spring Boot", "MySQL"],
    logo: "https://logo.clearbit.com/codecraft.com",
  },
  {
    id: 3,
    title: "Full Stack Developer Intern",
    company: "InnoTech",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    logo: "https://logo.clearbit.com/innotech.com",
  },
  {
    id: 4,
    title: "AI/ML Research Intern",
    company: "DeepLogics",
    location: "Pune",
    skills: ["Python", "TensorFlow", "NLP"],
    logo: "https://logo.clearbit.com/deeplogics.com",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudNest",
    location: "Remote",
    skills: ["Docker", "Kubernetes", "AWS"],
    logo: "https://logo.clearbit.com/cloudnest.com",
  },
  {
    id: 6,
    title: "Software QA Intern",
    company: "BugHunters Inc.",
    location: "Delhi",
    skills: ["Selenium", "JUnit", "Postman"],
    logo: "https://logo.clearbit.com/bughunters.com",
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "AppSculptors",
    location: "Chennai",
    skills: ["Flutter", "Dart", "Firebase"],
    logo: "https://logo.clearbit.com/appsculptors.com",
  },
  {
    id: 8,
    title: "Cybersecurity Analyst",
    company: "SecureHive",
    location: "Bangalore",
    skills: ["Ethical Hacking", "SIEM", "Network Security"],
    logo: "https://logo.clearbit.com/securehive.com",
  },
  {
    id: 9,
    title: "UI/UX Designer",
    company: "PixelForge",
    location: "Remote",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    logo: "https://logo.clearbit.com/pixelforge.com",
  },
];

const locations = ["All", "Remote", "Bangalore", "Hyderabad", "Pune", "Delhi", "Chennai"];
const skills = ["All", "React", "Java", "Spring Boot", "Node.js", "Flutter", "AWS", "Python"];

function JobMatch() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [skillFilter, setSkillFilter] = useState("All");
  const [savedJobs, setSavedJobs] = useState([]);
  const [page, setPage] = useState(1);

  const jobsPerPage = 6;
  const filteredJobs = dummyJobs.filter((job) => {
    const matchTitle =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchLocation = locationFilter === "All" || job.location === locationFilter;
    const matchSkills = skillFilter === "All" || job.skills.includes(skillFilter);
    return matchTitle && matchLocation && matchSkills;
  });

  const paginatedJobs = filteredJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

  const toggleSave = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <Typography
            variant="h4"
            gutterBottom
            className="text-blue-700 dark:text-blue-400 font-bold"
          >
            🎯 Recommended Jobs For You
          </Typography>

          {/* Filters */}
          <Paper elevation={2} className="p-4 rounded-2xl mb-6 dark:bg-gray-800">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search by title or company"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  select
                  fullWidth
                  variant="outlined"
                  label="Location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  {locations.map((loc) => (
                    <MenuItem key={loc} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  select
                  fullWidth
                  variant="outlined"
                  label="Skill"
                  value={skillFilter}
                  onChange={(e) => setSkillFilter(e.target.value)}
                >
                  {skills.map((skill) => (
                    <MenuItem key={skill} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Paper>

          {/* Job Cards */}
          <Grid container spacing={3}>
            {paginatedJobs.map((job) => (
              <Grid item xs={12} md={6} lg={4} key={job.id}>
                <Card className="shadow-md hover:shadow-lg transition-all dark:bg-gray-800">
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar src={job.logo} alt={job.company} />
                        <div>
                          <Typography variant="h6" className="font-semibold text-gray-800 dark:text-white">
                            {job.title}
                          </Typography>
                          <Typography variant="subtitle1" className="text-gray-600 dark:text-gray-300">
                            {job.company} — {job.location}
                          </Typography>
                        </div>
                      </div>
                      <IconButton onClick={() => toggleSave(job.id)} color="primary">
                        {savedJobs.includes(job.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                      </IconButton>
                    </div>
                    <Typography variant="body2" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Required Skills: {job.skills.join(", ")}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="mt-4"
                      fullWidth
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <Pagination
              count={Math.ceil(filteredJobs.length / jobsPerPage)}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobMatch;
