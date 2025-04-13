import { useState } from "react";
import { registerUser } from "../services/auth"; 
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate

const roles = ["student", "faculty", "admin"];

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate(); // ✅ initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    try {
      const response = await registerUser({
        fullName: form.name,
        email: form.email,
        password: form.password,
        role: role.toUpperCase(),
      });

      console.log("Registered!", response.data);
      setSuccess(true);
      setError("");

      setForm({ name: "", email: "", password: "" });
      setRole("student");

      // ✅ Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      const msg = err.response?.data || "Registration failed. Try again.";
      setError(typeof msg === "string" ? msg : JSON.stringify(msg));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-md space-y-6">
        <Typography variant="h5" className="text-center font-bold text-green-600">
          Create Your Account
        </Typography>

        <TextField
          fullWidth
          name="name"
          label="Full Name"
          variant="outlined"
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          value={form.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          value={form.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          select
          label="Select Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {roles.map((option) => (
            <MenuItem key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </MenuItem>
          ))}
        </TextField>

        <Button fullWidth variant="contained" color="success" onClick={handleRegister}>
          Register
        </Button>

        <Typography className="text-center text-sm text-gray-600">
        Already have an account?{" "}
       <Link 
       to="/" 
       className="text-blue-500 hover:text-blue-700 font-semibold underline transition-all duration-300 ease-in-out"
      >
      Login
     </Link>
</Typography>
      </div>

      <Snackbar open={!!error} autoHideDuration={4000} onClose={() => setError("")}>
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      </Snackbar>

      <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
        <Alert severity="success" onClose={() => setSuccess(false)}>
          Registered Successfully! Redirecting to login...
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Register;
