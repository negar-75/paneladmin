import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./item.scss";
import { productListTabs } from "../../../productListTabs";
import { Link } from "react-router-dom";
import ProductListTable from "../../../components/productList/table/productListTable";

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
          <ProductListTable />
        </div>
      </div>
    </div>
  );
}

export default ProductList;