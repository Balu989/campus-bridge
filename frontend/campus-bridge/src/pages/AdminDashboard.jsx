import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-red-600">👑 Admin Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <DashboardCard
              title="📊 Analytics"
              description="View system-wide usage and performance"
              path="/analytics"
              color="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-700 dark:to-red-600"
            />
            <DashboardCard
              title="🛠 Admin Panel"
              description="Manage users, roles, and course data"
              path="/admin"
              color="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
