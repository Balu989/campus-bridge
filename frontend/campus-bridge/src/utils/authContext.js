import { createContext, useState, useEffect, useContext } from "react"
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Restore session on load
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setToken(storedToken);
        setUser(parsedUser);
      } catch (err) {
        console.error("Error restoring session", err);
        logout(); // Clean up if parsing fails
      }
    }
  }, []);

  // Login function (real or mock)
  const login = (newToken, userData = null) => {
    try {
      let decodedUser;
  
      if (userData) {
        decodedUser = userData; // Ensure userData includes the role (email, fullName, and role)
      } else {
        decodedUser = jwtDecode(newToken); // Decode JWT to extract user info and role
      }
  
      // Save both the token and user details
      localStorage.setItem("token", newToken);
      localStorage.setItem("user", JSON.stringify(decodedUser));
      setToken(newToken);
      setUser(decodedUser);
    } catch (err) {
      console.error("Failed to process login", err);
    }
  };
  

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
