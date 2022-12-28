import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./items.scss";
import Tab from "../../../components/productList/tab/tab";
import Header from "../../../components/productList/header/header";
import ItemTable from "../../../components/productList/itemTable/itemTable";

function Items() {
  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <Tab />
        <Header />
        <ItemTable />
      </div>
    </div>
  );
}

export default Items;
