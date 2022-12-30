import React from "react";
import "./menuItem.scss";
import { deleteCategory, updateCategory } from "../../services/user.service";

import {
  handleDelet,
  firstLetterToUpperCase,
  useDidMountEffect,
} from "../../services/functions";

import StatusSwitch from "../statusSwitch/satusSwitch";

function MenuItem(props) {
  const { image, title, id, items, setItems, status } = props;

  return (
    <div className="menu-item">
      <div className="card-img">
        <img src={image} />
      </div>
      <div className="card-body">
        <div className="body-title">
          <h6>{firstLetterToUpperCase(title)}</h6>
          <StatusSwitch
            elementId={id}
            apiFunc={updateCategory}
            status={status}
          />
        </div>
        <button
          className="delet-category"
          onClick={() => handleDelet(id, deleteCategory, setItems, items)}
        >
          {" "}
          Delet category
        </button>
        <button className="edit-category"> Edit category</button>
      </div>
    </div>
  );
}

export default MenuItem;
