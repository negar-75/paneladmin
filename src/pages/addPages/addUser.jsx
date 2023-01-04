import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addUser.scss";
import Navbar from "../../components/navbar/Navbar";
import { createUser } from "../../services/user.service";
import ChangePhoto from "../../components/changePhoto/changePhoto";
import useCreateApi from "../../hooks/useCreateApi";
import TextField from "@mui/material/TextField";
import { validateField } from "../../validation/validationFunc";
import AlertMessage from "../../components/alert/alert";
import SubmitButton from "../../components/submitButton/submitButton";

function AddStaff(props) {
  const createStaff = useCreateApi(createUser);

  const { loading, request, message, error } = createStaff;

  const [staff, setStaff] = React.useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errMessage, setErrMessage] = React.useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    emailValid: false,
    passwordValid: false,
    formValid: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    request(JSON.stringify(staff));
  };

  const handleChange = (e) => {
    setStaff({
      ...staff,
      [e.target.name]: e.target.value,
    });
    validateField(e.target.name, e.target.value, errMessage);
  };

  return (
    <div className="add">
      <Sidebar />
      <div className="add-container">
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
            <form>
              {props.input.map((item) => {
                return (
                  <div className="form-element">
                    <TextField
                      key={item.id}
                      error={errMessage[item.name]?.length === 0 ? false : true}
                      {...item}
                      sx={{ width: "100%" }}
                      required={true}
                      value={staff[item.name]}
                      onChange={handleChange}
                      helperText={errMessage[item.name]}
                    />
                  </div>
                );
              })}
              <SubmitButton
                loading={loading}
                formValid={errMessage.formValid}
                handleSubmit={handleSubmit}
              />
            </form>

            <AlertMessage
              message={message}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStaff;
