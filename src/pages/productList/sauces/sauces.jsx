import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./sauces.scss";
import Tab from "../../../components/productList/tab/tab";
import Header from "../../../components/productList/header/header";
import Table from "../../../components/productList/table/table";
import { sauceColumns } from "../../../sources/productListSource/productListColumns";

function Sauces() {
  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <Tab />
        <Header />
        <Table col={sauceColumns} />
      </div>
    </div>
  );
}

export default Sauces;
