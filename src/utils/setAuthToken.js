import axios from "axios";

export const setAuthToken = (token) => {
  if (token) return (axios.defaults.headers.common["x-auth-token"] = token);
  delete axios.defaults.headers.common["x-auth-token"];
};
