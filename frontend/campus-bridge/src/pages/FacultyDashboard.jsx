import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function FacultyDashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-green-600">🎓 Faculty Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <DashboardCard
              title="📚 LMS Management"
              description="Upload content, mark attendance, assign assessments"
              path="/lms"
              color="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-700 dark:to-green-600"
            />
            <DashboardCard
              title="📈 Analytics"
              description="Monitor student progress and performance"
              path="/analytics"
              color="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-700 dark:to-purple-600"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default FacultyDashboard;
