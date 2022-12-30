import React from "react";
import { productListTabs } from "../../../sources/productListSource/productListTabs";
import "./tab.scss";
import { Link } from "react-router-dom";

function Tab() {
  const [activeTab, setActiveTab] = React.useState(() => {
    switch (window.location.pathname) {
      case "/productList/items": {
        return "Items";
      }
      case "/productList/sauce": {
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
          console.log(activeTab == item.tabName);
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

export default Tab;
