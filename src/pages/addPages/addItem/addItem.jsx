import React from "react";
import { AddItemInputs } from "../../../sources/productListSource/AddForms";
import SelectOptionInput from "../../../components/selectOptionInput/selectOptionInput";
import { TextField } from "@mui/material";
import "./addItem.scss";
import SubmitButton from "../../../components/submitButton/submitButton";
import PreviewItemForm from "../../../components/previewItemForm/previewItemForm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import AddSauceModal from "../../../components/addSauceModal/addSauceModal";

function AddItem() {
  const [itemForm, setItemForm] = React.useState({
    name: "",
    description: "",
    logo_url: "",
    category_id: "",
    sauces: [],
    station_id: "",
    price: 0,
    size: "",
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleChange = (e, obj) => {
    setItemForm({
      ...itemForm,
      [e.target.name]: obj?.props?.id ? obj.props.id : e.target.value,
    });
  };

  return (
    <div className="add-item">
      <div className="right">
        <h2 className="title">Item info</h2>
        <form className="add-item-form">
          {AddItemInputs.map((item) => {
            if (item?.selectable === "true") {
              return (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <SelectOptionInput
                    label={item.label}
                    func={item.func}
                    name={item.name}
                    keyName={item.keyName}
                    onChange={handleChange}
                    value={itemForm[item.name]}
                    onClick={() => console.log(item.name)}
                  />
                  {item.label === "Sauce" && (
                    <AddCircleOutlineIcon
                      sx={{ cursor: "pointer", color: "primary.main" }}
                      onClick={() => setIsModalOpen(true)}
                    />
                  )}
                </Box>
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
                  value={itemForm[item.name]}
                  onChange={handleChange}
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
      <AddSauceModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default AddItem;
