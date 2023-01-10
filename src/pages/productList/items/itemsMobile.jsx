import React from "react";
import ProductListTabs from "../../../components/productListTab/productListTab";
import TableHeader from "../../../components/TableHeader/TableHeader";
import ProductListTable from "../../../components/ProductListTable/ProductListTable";
import { itemColumns } from "../../../sources/productListSource/productListColumns";
import { useNavigate } from "react-router-dom";
import MobileNavbar from "../../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../../components/mobileSidebar/mobileSidebar";

function ItemsMobile() {
  const navigate = useNavigate();
  return (
    <div className="product-list">
      <MobileNavbar />
      <MobileSidebar />
      <div className="product-list-container">
        <ProductListTabs />
        <TableHeader onClickFunc={() => navigate("/productList/items/add")} />
        <ProductListTable cols={itemColumns} />
      </div>
    </div>
  );
}

export default ItemsMobile;
