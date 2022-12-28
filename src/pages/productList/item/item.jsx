import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./item.scss";
import Tab from "../../../components/productList/tab/tab";
import Header from "../../../components/productList/header/header";
import itemTable from "../../../components/productList/itemTable/itemTable";

function ProductList() {
  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <Tab />
        <Header />
        <itemTable />
      </div>
    </div>
  );
}

export default ProductList;
