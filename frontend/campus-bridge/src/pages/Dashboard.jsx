import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            👋 Welcome Back to Campus Bridge!
          </h2>

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <DashboardCard
              title="📚 LMS Module"
              description="Manage courses, track attendance & assessments"
              path="/lms"
              color="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-700 dark:to-blue-600"
            />
            <DashboardCard
              title="💻 Code Editor"
              description="Solve problems, compile & run code instantly"
              path="/code"
              color="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-700 dark:to-green-600"
            />
            <DashboardCard
              title="🤖 Job Match AI"
              description="Get smart job suggestions based on your coding profile"
              path="/jobs"
              color="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-600 dark:to-yellow-500"
            />
            <DashboardCard
              title="🧠 AI Assistant"
              description="AI-powered hints, code review & logic explanations"
              path="/assistant"
              color="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-700 dark:to-purple-600"
            />
            <DashboardCard
              title="📊 Admin Panel"
              description="Track analytics, assign mocks, monitor progress"
              path="/admin"
              color="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-700 dark:to-red-600"
            />
            <DashboardCard
              title="📊 GroupRoom"
              description="Students can collaboratively work on coding problems"
              path="/GroupRoom"
              color="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-700 dark:to-blue-600"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
