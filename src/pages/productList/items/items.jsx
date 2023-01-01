import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./items.scss";
import ProductListTabs from "../../../components/productListTab/productListTab";
import TableHeader from "../../../components/TableHeader/TableHeader";
import ProductListTable from "../../../components/ProductListTable/ProductListTable";
import { itemColumns } from "../../../sources/productListSource/productListColumns";

function Items() {
  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <ProductListTabs />
        <TableHeader />
        <ProductListTable cols={itemColumns} />
      </div>
    </div>
  );
}

export default Items;
