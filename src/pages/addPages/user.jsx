import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./user.scss";
import Navbar from "../../components/navbar/Navbar";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import { getUser } from "../../actions/auth";
import { createUser } from "../../services/user.service";
import { setMessage, failedMessage } from "../../actions/message";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import ChangePhoto from "../../components/changePhoto/changePhoto";

function User(props) {
  const message = useSelector((state) => state.message.message);
  const success = useSelector((state) => state.message.success);
  store.dispatch(getUser());
  const isAuth = useSelector((state) => state.user.isAuth);
  if (!isAuth && !localStorage.getItem("token"))
    return <Navigate to="/login" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));

    createUser(Object.fromEntries(data.entries()))
      .then((res) => {
        console.log(res);
        store.dispatch(setMessage("User has been created."));
      })

      .catch((err) => {
        console.log(err);
        store.dispatch(failedMessage("Action has failed"));
      });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">{props.title}</div>
        <div className="bottom">
          <div className="left">
            <ChangePhoto
              title="Upload photo"
              showImage={true}
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              {props.input.map((item) => {
                return (
                  <div
                    className="formElement"
                    key={item.id}
                  >
                    <label>{item.label}</label>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.name}
                      required={item.required}
                    />
                    <span>{item.errorMessage}</span>
                  </div>
                );
              })}

              {message && (
                <Stack
                  sx={{ width: "100%" }}
                  spacing={2}
                >
                  {success === true && (
                    <Alert severity="success">{message}</Alert>
                  )}
                  {success === false && (
                    <Alert severity="error">{message}</Alert>
                  )}
                </Stack>
              )}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
