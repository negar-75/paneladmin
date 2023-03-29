import axios from "axios";

const login = (userObj) => {
  return axios.post(
    "http://localhost:5500/api/v1/login/access-token",
    new URLSearchParams({
      username: userObj.username,
      password: userObj.password,
    }),
    {
      headers: {
        accept: "application/json",
      },
      timeout: 10000,
    }
  );
};

export default {
  login,
};
