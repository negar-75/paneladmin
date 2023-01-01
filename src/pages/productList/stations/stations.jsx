import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./stations.scss";
import ProductListTabs from "../../../components/productListTab/productListTab";
import TableHeader from "../../../components/TableHeader/TableHeader";
import ProductListTable from "../../../components/ProductListTable/ProductListTable";
import { stationColumns } from "../../../sources/productListSource/productListColumns";

function Stations() {
  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <ProductListTabs />
        <TableHeader />
        <ProductListTable cols={stationColumns} />
      </div>
    </div>
  );
}

export default Stations;
