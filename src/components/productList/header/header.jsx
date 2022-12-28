import React from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";

function Header(props) {
  return (
    <div className="product-list-header">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
        />
        <SearchIcon />
      </div>
      <div className="add-button">
        <button>Add</button>
      </div>
    </div>
  );
}

export default Header;
