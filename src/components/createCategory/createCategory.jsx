import React from "react";
import { TextField, Box } from "@mui/material";
import "./createCategory.scss";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import ChangePhoto from "../changePhoto/changePhoto";
import { createCategory } from "../../services/user.service";
import { createCategoryInput } from "../../sources/formsource";
import {
  failedMessage,
  clearMessage,
  hintMessage,
} from "../../actions/message";
import store from "../../store";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { useTheme } from "@mui/material/styles";
import ErrorPopUp from "../errorPopUp/errorPopUp";
import { SET_LOADING, CLEAR_LOADING } from "../../actions/type";

function CreateCategory({ setSuccess }) {
  const [categoryName, setCategoryName] = React.useState();
  const [url, setUrl] = React.useState();
  const inputRef = React.useRef();
  const loading = useSelector((state) => state.loading.loading);
  const failedmessage = useSelector((state) => state.message.failedMessage);
  const hintmessage = useSelector((state) => state.message.hintMessage);
  const theme = useTheme();

  const submitHandler = async () => {
    store.dispatch({
      type: SET_LOADING,
      payload: "createCategory",
    });
    try {
      if (categoryName && url) {
        store.dispatch(clearMessage());
        const res = await createCategory(categoryName, url);
        setSuccess(true);
        store.dispatch({
          type: CLEAR_LOADING,
        });
      } else {
        store.dispatch(hintMessage("Please fill required fields"));
        store.dispatch({
          type: CLEAR_LOADING,
        });
      }
    } catch (err) {
      console.log(err);
      setSuccess(false);
      store.dispatch({
        type: CLEAR_LOADING,
      });
      store.dispatch(failedMessage("Something is wrong! please try later"));
    }
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

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
          {createCategoryInput.map((item) => {
            return (
              <div
                className="input"
                id={item.id}
              >
                <TextField
                  name={item.name}
                  label={item.lable}
                  variant={item.variant}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                  sx={theme.textFieldStyle}
                  inputRef={inputRef}
                />
                <span>{hintmessage}</span>
              </div>
            );
          })}
        </Box>
        <ErrorPopUp message={failedmessage} />
        <ChangePhoto
          title="Upload photo"
          showImage={false}
          setUrl={setUrl}
          className="change-photo"
        />
      </div>

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
        <div className="submit">
          <button onClick={submitHandler}>Submit</button>
        </div>
      )}
    </div>
  );
}
export default CreateCategory;
