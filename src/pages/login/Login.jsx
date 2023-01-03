import React from "react";
import TextField from "@mui/material/TextField";
import "./login.scss";
import store from "../../store";
import { login } from "../../actions/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInputs } from "../../sources/loginInputs";
import ErrorPopUp from "../../components/errorPopUp/errorPopUp";
import { useTheme } from "@mui/material/styles";
import SubmitButton from "../../components/submitButton/submitButton";

function Login() {
  const [person, setPerson] = React.useState({
    username: "",
    password: "",
  });

  const [isActive, setIsActive] = React.useState(false);
  const message = useSelector((state) => state.message.failedMessage);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const loading = useSelector((state) => state.loading.loading);
  const theme = useTheme();

  let navigate = useNavigate();

  const inputhandler = (e) => {
    setPerson(() => {
      return {
        ...person,
        [e.target.name]: e.target.value,
      };
    });
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      setIsActive(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [isLoggedIn]);

  return (
    <div className="login">
      <div className="loginContainer">
        <h2>
          <span className="first-section">fast</span>
          <span className="second-section">Foo</span>
        </h2>
        <div className="loginForm">
          <div className="title">Login</div>
          {loginInputs.map((item) => {
            return (
              <TextField
                id={item.id}
                name={item.name}
                label={item.lable}
                variant={item.variant}
                onChange={inputhandler}
                sx={theme.textFieldStyle}
                type={item.type}
              />
            );
          })}

          <SubmitButton
            loading={loading}
            isActive={isActive}
            formValid={
              person.username.length > 0 && person.password.length >= 12
            }
            handleSubmit={() => store.dispatch(login(person))}
          />
        </div>
      </div>
      <div className="imageContainer">
        <img
          className="hero-img"
          src={require("../../assets/images/pizza.jpg")}
        />
      </div>

      <ErrorPopUp message={message} />
    </div>
  );
}

export default Login;
