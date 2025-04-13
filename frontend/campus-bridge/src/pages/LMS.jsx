import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/lms/CourseCard";
import UploadMaterial from "../components/lms/UploadMaterial";
import AttendanceTracker from "../components/lms/AttendanceTracker";

function LMS() {
  const courses = [
    "Data Structures",
    "Operating Systems",
    "Web Development",
    "Database Systems",
    "Machine Learning",
    "Computer Networks",
    "Cloud Computing",
    "Software Engineering",
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            📚 Learning Management System
          </h2>

          {/* Always show UploadMaterial and AttendanceTracker */}
          <div className="space-y-8 mb-12">
            <UploadMaterial />
            <AttendanceTracker />
          </div>

          {/* Course Grid View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((title, index) => (
              <CourseCard key={index} title={title} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default LMS;
