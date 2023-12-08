import React from "react";
import TextField from "@mui/material/TextField";
import "./login.scss";
import store from "../../store";
import { login } from "../../actions/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInputs } from "../../sources/loginInputs";
import ErrorPopUp from "../../components/errorPopUp/errorPopUp";
import SubmitButton from "../../components/submitButton/submitButton";
import { LOGIN_SUCCESS} from "../../actions/type";
function LoginDesktop() {
  const [person, setPerson] = React.useState({
    username: "",
    password: "",
  });

  const [isActive, setIsActive] = React.useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

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
          {loginInputs.map((item, index) => {
            return (
              <TextField
                key={index}
                id={item.id.toString()}
                name={item.name}
                label={item.lable}
                variant={item.variant}
                onChange={inputhandler}
                type={item.type}
              />
            );
          })}

          <SubmitButton
            loading={loading}
            isActive={isActive}
            formValid={
              person.username.length > 0 && person.password.length >= 5
            }
            handleSubmit={() =>
              {
                if(person.username ==='admin'&&person.password === '12345'){
                  localStorage.setItem("token", person.username);
                  localStorage.setItem("username", person.username);     
                  setLoading(false);
                  store.dispatch({
                    type: LOGIN_SUCCESS,
                    payload: person.username,
                  });
                 
                }
              }
            }
          />
        </div>
      </div>
      <div className="imageContainer">
        <img className="hero-img" />
      </div>

      <ErrorPopUp message={error} />
    </div>
  );
}

export default LoginDesktop;
