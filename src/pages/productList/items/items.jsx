import React from "react";
import "./items.scss";
import ProductListTabs from "../../../components/productListTab/productListTab";
import TableHeader from "../../../components/TableHeader/TableHeader";
import ProductListTable from "../../../components/ProductListTable/ProductListTable";
import { itemColumns } from "../../../sources/productListSource/productListColumns";
import { useNavigate } from "react-router-dom";

function ItemsDesktop() {
  const navigate = useNavigate();
  return (
    <div className="product-list">
      <ProductListTabs />
      <TableHeader onClickFunc={() => navigate("/productList/items/add")} />
      <ProductListTable cols={itemColumns} />
    </div>
  );
}

export default ItemsDesktop;
