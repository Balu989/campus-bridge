import { useNavigate } from "react-router-dom";

function DashboardCard({ title, description, path, color }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className={`cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${color}`}
    >
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default DashboardCard;
