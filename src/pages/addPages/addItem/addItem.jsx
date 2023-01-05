import React from "react";
import { AddItemInputs } from "../../../sources/productListSource/AddForms";
import SelectOptionInput from "../../../components/selectOptionInput/selectOptionInput";
import { TextField } from "@mui/material";
import "./addItem.scss";
import SubmitButton from "../../../components/submitButton/submitButton";
import PreviewItemForm from "../../../components/previewItemForm/previewItemForm";

function AddItem() {
  return (
    <div className="add-item">
      <div className="right">
        <h2 className="title">Item info</h2>
        <form className="add-item-form">
          {AddItemInputs.map((item) => {
            if (item?.selection) {
              return (
                <SelectOptionInput
                  key={item.id}
                  label={item.label}
                />
              );
            } else {
              return (
                <TextField
                  key={item.id}
                  {...item}
                  sx={{
                    " &.MuiTextField-root": {
                      width: "100%",
                    },
                  }}
                />
              );
            }
          })}
        </form>
        <SubmitButton />
      </div>
      <div className="left">
        <PreviewItemForm />
      </div>
    </div>
  );
}

export default AddItem;
