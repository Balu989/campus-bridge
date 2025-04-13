// /services/auth.js
import API from "./api";

export const loginUser = async (email, password) => {
  return API.post("/api/auth/login", { email, password });
};

export const registerUser = async (userData) => {
  return API.post("/api/auth/register", userData);
};
