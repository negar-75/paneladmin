import React from "react";
import { productListTabs } from "../../sources/productListSource/Tabs";
import "./productListTab.scss";
import { Link } from "react-router-dom";

function ProductListTabs() {
  const [activeTab, setActiveTab] = React.useState(() => {
    switch (window.location.pathname) {
      case "/productList/items": {
        return "Items";
      }
      case "/productList/sauces": {
        return "Sauces";
      }
      default:
        return " ";
    }
  });

  return (
    <div className="product-list-tabs">
      <ul className="tab-names">
        {productListTabs.map((item) => {
          return (
            <Link
              className="link"
              to={item.url}
              key={item.id}
            >
              <li className={activeTab === item.tabName ? "active" : ""}>
                {item.tabName}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductListTabs;
