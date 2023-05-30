import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../components/mobileNavbar/mobileNavbar";
import MobileSidebar from "../components/mobileSidebar/mobileSidebar";

function Layout({ children }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  let mobileLayout = (
    <div className="screen-container">
      <Sidebar />
      <div className="screen-section-container">
        <Navbar />
        {children}
      </div>
    </div>
  );

  let desktopLayout = (
    <div className="screen-container">
      <MobileNavbar />
      <MobileSidebar />
      <div className="screen-section-container">{children}</div>
    </div>
  );

  return <>{isTabletOrMobile ? desktopLayout : mobileLayout}</>;
}

export default Layout;
