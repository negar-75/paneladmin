import authService from "../services/authService";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type";

export const login = (userObj, setLoading, setError) => async (dispatch) => {
  setError("");
  setLoading(true);
  try {
    const response = await authService.login(userObj);
    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem("username", userObj.username);
    setLoading(false);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: userObj.username,
    });
  } catch (error) {
    setLoading(false);
    dispatch({
      type: LOGIN_FAIL,
    });
    if (error?.response?.status === 400) {
      setError(
        "Username or password is incorrect. All passwords at least must be 12 characters."
      );
    } else {
      setError("Something went wrong, please try again ");
    }
  } finally {
    setLoading(false);
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: LOGOUT,
  });
};
