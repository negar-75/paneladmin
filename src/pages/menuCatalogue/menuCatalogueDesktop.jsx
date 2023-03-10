import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./menuCatalogue.scss";
import Menugrid from "../../components/menuGrid/menugrid";
import CreateCategory from "../../components/createCategory/createCategory";

import { useMediaQuery } from "react-responsive";

function MenuCatalogueDesktop() {
  const [success, setSuccess] = React.useState(false);

  return (
    <div className="menuCatalogue">
      <Sidebar />
      <div className="menuCatalogue-container">
        <Navbar />
        <div className="up">
          <CreateCategory setSuccess={setSuccess} />
        </div>
        <div className="down">
          <Menugrid
            success={success}
            setSuccess={setSuccess}
            itemsPerPage={6}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuCatalogueDesktop;
