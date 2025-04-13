import { NavLink } from "react-router-dom";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import {BarChart as BarChartIcon} from "@mui/icons-material";

import {
  Dashboard as DashboardIcon,
  School as LMSIcon,
  Code as CodeIcon,
  Work as JobIcon,
  AdminPanelSettings as AdminIcon,
  SmartToy as AIAssistantIcon,
  Group as GroupIcon,
} from "@mui/icons-material";

function Sidebar() {
  const navItems = [
    { label: "Dashboard", to: "/dashboard", icon: <DashboardIcon /> },
    { label: "LMS", to: "/lms", icon: <LMSIcon /> },
    { label: "Code Editor", to: "/code", icon: <CodeIcon /> },
    { label: "Job Match", to: "/jobs", icon: <JobIcon /> },
    { label: "AI Assistant", to: "/assistant", icon: <AIAssistantIcon /> },
    { label: "Group Room", to: "/group-room", icon: <GroupIcon /> },
    { label: "Admin Panel", to: "/admin", icon: <AdminIcon /> },
    { label: "Profile", to: "/profile", icon: <AccountCircleIcon /> },
    { label: "Analytics", to: "/analytics", icon: <BarChartIcon /> },

  ];

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-800 flex flex-col p-4 transition-colors duration-300">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center tracking-wide">
        Campus Bridge
      </div>

      <ul className="space-y-2">
        {navItems.map(({ label, to, icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-white"
                }`
              }
            >
              <span className="mr-3 text-lg">{icon}</span>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
