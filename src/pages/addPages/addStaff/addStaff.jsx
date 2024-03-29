import React from "react";

import "./addStaff.scss";

import { createStuff } from "../../../services/user.service";
import ChangePhoto from "../../../components/changePhoto/changePhoto";
import useCreateApi from "../../../hooks/useCreateApi";
import TextField from "@mui/material/TextField";
import { validateField } from "../../../validation/validationFunc";
import AlertMessage from "../../../components/alert/alert";
import SubmitButton from "../../../components/submitButton/submitButton";
import { StaffInputs } from "../../../sources/staffSources/staffAddForm";

function AddStaffDesktop() {
  const createStaffApi = useCreateApi(createStuff);

  const { loading, request, message, error } = createStaffApi;

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
      <div className="top">Staffs</div>
      <div className="bottom">
        <div className="left">
          <ChangePhoto
            title="Upload photo"
            showImage={true}
          />
        </div>
        <div className="right">
          <form>
            {StaffInputs.map((item) => {
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
                    name={item.name}
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
  );
}

export default AddStaffDesktop;
