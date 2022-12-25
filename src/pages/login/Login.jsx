import React from "react";
import TextField from "@mui/material/TextField";
import "./login.scss";
import store from "../../store";
import { login } from "../../actions/auth";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
import { useNavigate } from "react-router-dom";
import { loginInputs } from "../../formsource";
import ReactLoading from "react-loading";
import ErrorPopUp from "../../components/errorPopUp/errorPopUp";
import { useTheme } from "@mui/material/styles";

function Login() {
  const [person, setPerson] = React.useState({
    username: "",
    password: "",
  });

  const [formValid, setFormValid] = React.useState(false);
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
    if (person.username.length > 0 && person.password.length >= 12) {
      console.log("valid");
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [person]);

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
                value={person.name}
              />
            );
          })}
          <div className="wrapper ">
            {loading ? (
              <div className="loading">
                <ReactLoading
                  type="spinningBubbles"
                  color="green"
                  height={20}
                  width={20}
                />
              </div>
            ) : (
              <button
                className={
                  formValid ? `submit ${isActive ? "active" : " "}` : "disable"
                }
                type="button"
                onClick={() => {
                  store.dispatch(login(person));
                }}
                disabled={!formValid}
              >
                <span>Submit</span>
                <div className="success">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon"
                  />
                </div>
              </button>
            )}
          </div>
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
