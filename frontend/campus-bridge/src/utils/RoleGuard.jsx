// utils/RoleGuard.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

function RoleGuard({ role, children }) {
  const { user } = useAuth();
  return user?.role === role ? children : <Navigate to="/login" />;
}

export default RoleGuard;
