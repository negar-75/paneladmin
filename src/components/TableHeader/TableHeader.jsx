import React from "react";
import "./TableHeader.scss";
import SearchIcon from "@mui/icons-material/Search";

function TableHeader({ onClickFunc }) {
  return (
    <div className="product-list-header">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
        />
        <SearchIcon className="icon" />
      </div>
      <div className="add-button">
        <button onClick={() => onClickFunc()}>Add</button>
      </div>
    </div>
  );
}

export default TableHeader;
