import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MobileNavbar from "../../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../../components/mobileSidebar/mobileSidebar";
import "./menuCatalogue.scss";
import Menugrid from "../../components/menuGrid/menugrid";
import CreateCategory from "../../components/createCategory/createCategory";

import { useMediaQuery } from "react-responsive";

function MenuCatalogueDesktop() {
  const [success, setSuccess] = React.useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {isDesktopOrLaptop && (
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
      )}
      {isTabletOrMobile && (
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
      )}
    </>
  );
}

export default MenuCatalogueDesktop;
