import axios from "./axios";

export const register = (input) => {
  return axios.post("/auth/register", input);
};

export const login = (input) => {
  return axios.post("/auth/login", input);
};

export const getMe = () => {
  return axios.get("/auth/me");
};
