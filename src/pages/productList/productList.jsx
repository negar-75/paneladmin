import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./productList.scss";

function ProductList() {
  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <div className="product-list-tabs">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
