import { useAuth } from "../utils/authContext";
import DarkModeToggle from "./DarkModeToggle";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md border-b dark:border-gray-800">
      <div className="text-2xl font-extrabold text-blue-600 dark:text-white tracking-tight flex items-center gap-2">
        🚀 <span className="hidden sm:inline-block">Campus Bridge</span>
      </div>

      <div className="flex items-center gap-5">
        <DarkModeToggle />

        {user && (
          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full shadow-inner">
            <div className="text-sm text-gray-800 dark:text-white font-medium hidden sm:block">
              {user.fullName}
            </div>

            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover border-2 border-blue-500 shadow"
              />
            ) : (
              <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold uppercase">
                {user.fullName[0]}
              </div>
            )}
          </div>
        )}

        <button
          onClick={handleLogout}
          className="text-sm font-semibold text-red-500 hover:text-red-600 hover:underline transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
