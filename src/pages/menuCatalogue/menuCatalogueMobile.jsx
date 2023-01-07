import React from "react";
import MobileNavbar from "../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../components/mobileSidebar/mobileSidebar";
import Menugrid from "../../components/menuGrid/menugrid";
import CreateCategory from "../../components/createCategory/createCategory";

function MenuCatalogueMobile() {
  const [success, setSuccess] = React.useState(false);
  return (
    <div className="menuCatalogue">
      <MobileNavbar />
      <MobileSidebar />
      <div className="menuCatalogue-container">
        <div className="up">
          <CreateCategory setSuccess={setSuccess} />
        </div>
        <div className="down">
          <Menugrid
            success={success}
            setSuccess={setSuccess}
            itemsPerPage={3}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuCatalogueMobile;
