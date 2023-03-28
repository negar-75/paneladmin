import React from "react";
import "./menuCatalogue.scss";
import Menugrid from "../../components/menuGrid/menugrid";
import CreateCategory from "../../components/createCategory/createCategory";

function MenuCatalogueDesktop() {
  const [success, setSuccess] = React.useState(false);

  return (
    <div className="menuCatalogue">
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
  );
}

export default MenuCatalogueDesktop;
