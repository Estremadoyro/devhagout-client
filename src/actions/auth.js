import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../action-types/types";
import { setAuthToken } from "../utils/setAuthToken";

//Load user
export const loadUser = () => async (dispatch) => {
  const localToken = localStorage.token;
  if (localToken) setAuthToken(localToken);
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
    console.log(err);
  }
};

//Register user
export const register = (name, username, email, password) => async (
  dispatch
) => {
  try {
    const res = await axios.post("/api/users", {
      name,
      username,
      email,
      password,
    });
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors)
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch({
      type: REGISTER_FAIL,
    });
    console.log(err);
  }
};

//Login
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth", {
      email,
      password,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors)
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch({
      type: LOGIN_FAIL,
    });
    console.log(err);
  }
};

//Logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
