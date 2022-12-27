import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./item.scss";
import ProductListTable from "../../../components/productList/table/productListTable";
import Tab from "../../../components/productList/tab/tab";

function ProductList() {
  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <Tab />
        <ProductListTable />
      </div>
    </div>
  );
}

export default ProductList;
