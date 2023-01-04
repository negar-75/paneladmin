import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./stations.scss";
import ProductListTabs from "../../../components/productListTab/productListTab";
import TableHeader from "../../../components/TableHeader/TableHeader";
import ProductListTable from "../../../components/ProductListTable/ProductListTable";
import { stationColumns } from "../../../sources/productListSource/productListColumns";
import AddStationModal from "../../../components/addStationModal/addStationModal";

function Stations() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="product-list">
      <Sidebar />
      <div className="product-list-container">
        <Navbar />
        <ProductListTabs />
        <TableHeader setIsModalOpen={setIsModalOpen} />
        <ProductListTable cols={stationColumns} />
        <AddStationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
}

export default Stations;
