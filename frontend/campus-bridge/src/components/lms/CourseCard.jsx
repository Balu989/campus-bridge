// /components/lms/CourseCard.jsx
function CourseCard({ title }) {
    return (
      <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">Lecture notes, assignments & attendance</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Course
        </button>
      </div>
    );
  }
  
  export default CourseCard;
  