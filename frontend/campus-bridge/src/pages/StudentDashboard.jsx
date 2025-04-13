import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function StudentDashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">🏫 Student Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <DashboardCard
              title="📚 My Courses"
              description="Access uploaded materials and track attendance"
              path="/lms"
              color="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-700 dark:to-blue-600"
            />
            <DashboardCard
              title="💻 Code Editor"
              description="Practice coding and solve problems"
              path="/code"
              color="bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-700 dark:to-indigo-600"
            />
            <DashboardCard
              title="🤖 Job Match"
              description="Discover jobs tailored to your skills"
              path="/jobs"
              color="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-700 dark:to-yellow-600"
            />
            <DashboardCard
              title="🧠 AI Assistant"
              description="Get AI support for your code and logic"
              path="/assistant"
              color="bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-700 dark:to-pink-600"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;
