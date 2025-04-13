import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LMS from "./pages/LMS";
import Code from "./pages/Code";
import JobMatch from "./pages/JobMatch";
import AdminPanel from "./pages/AdminPanel";
import AIAssistant from "./pages/AIAssistant";
import GroupRoom from "./pages/GroupRoom";
import ProfilePage from "./pages/ProfilePage";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";


const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-2xl text-red-600 dark:text-red-400 dark:bg-gray-900">
    404 - Page Not Found
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/code" element={<Code />} />
        <Route path="/jobs" element={<JobMatch />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/assistant" element={<AIAssistant />} />
        <Route path="/group-room" element={<GroupRoom />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />

      </Routes>
    </div>
  );
}

export default App;
