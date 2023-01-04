import React from "react";
import { TextField, Box } from "@mui/material";
import "./createCategory.scss";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import ChangePhoto from "../changePhoto/changePhoto";
import { createCategory } from "../../services/user.service";
import useCreateApi from "../../hooks/useCreateApi";
import ErrorPopUp from "../errorPopUp/errorPopUp";
import SubmitButton from "../submitButton/submitButton";
import AlertMessage from "../alert/alert";

function CreateCategory({ setSuccess }) {
  const [categoryName, setCategoryName] = React.useState();
  const [url, setUrl] = React.useState();
  const inputRef = React.useRef();
  const createCat = useCreateApi(createCategory);
  const { loading, request, message, error } = createCat;

  const handleSubmit = (e) => {
    e.preventDefault();
    request(categoryName, url);
  };

  React.useEffect(() => {
    if (message === "Done") {
      setSuccess(true);
    }
  }, [message]);

  return (
    <div className="create-category">
      <div className="title">Create new category</div>
      <div className="body">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <FastfoodOutlinedIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <div className="input">
            <TextField
              name="category_name"
              label="Category name"
              variant="standard"
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
              inputRef={inputRef}
            />
          </div>
        </Box>

        <ChangePhoto
          title="Upload photo"
          showImage={false}
          setUrl={setUrl}
          className="change-photo"
        />
      </div>
      <SubmitButton
        loading={loading}
        formValid={categoryName?.length > 0 && url?.length > 0}
        handleSubmit={handleSubmit}
      />
      <AlertMessage
        message={message}
        error={error}
      />
    </div>
  );
}
export default CreateCategory;
