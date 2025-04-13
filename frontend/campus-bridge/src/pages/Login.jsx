import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import { useAuth } from "../utils/authContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth(); // this sets token and user
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await loginUser(email, password);

      // Destructure the response
      const { token, email: userEmail, fullName, role } = res.data;

      // Save to context/localStorage via login()
      login(token, { email: userEmail, fullName, role });

      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-md space-y-6">
        <Typography variant="h5" className="text-center font-bold text-blue-600">
          Login to Campus Bridge
        </Typography>

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Typography className="text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
      <Link 
       to="/register" 
       className="text-blue-500 hover:text-blue-700 font-semibold underline transition-all duration-300 ease-in-out"
       >
        Register
       </Link>
      </Typography>
      </div>
    </div>
  );
}

export default Login;