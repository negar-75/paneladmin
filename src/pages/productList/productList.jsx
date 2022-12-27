import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./productList.scss";
import { productListTabs } from "../../productListTabs";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <div className="product-list-tabs">
          <ul>
            {productListTabs.map((item) => {
              return (
                <Link
                  className="link"
                  to={item.url}
                  key={item.id}
                >
                  <li>{item.tabName}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
