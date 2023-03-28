import React, { useEffect, useState } from "react";
import Home from "./pages/home/home";
import StaffsTable from "./pages/staff/staffsTable/staffsTable";
import Login from "./pages/login/login";
import AddStaff from "./pages/addPages/addStaff/addStaff";
import SingleStaff from "./pages/staff/singleStaff/singleStaff";
import EditStaff from "./pages/staff/editStaff/editStaff";
import MenuCatalogue from "./pages/menuCatalogue/menuCatalogue";
import Items from "./pages/productList/items/items";
import AddItem from "./pages/addPages/addItem/addItem";
import Stations from "./pages/productList/stations/stations";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoutes from "./routes/privateRoutes";
import "./style/darkStyle.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./components/mobileNavbar/mobileNavbar";
import MobileSidebar from "./components/mobileSidebar/mobileSidebar";

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const isOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>

        {isloggedIn && (
          <div className="screens-container">
            {isTabletOrMobile && <MobileNavbar />}
            {isTabletOrMobile && <MobileSidebar />}
            {isOrLaptop && <Sidebar />}
            <div className="screens-section-container">
              {isOrLaptop && <Navbar />}
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route
                    element={<Home />}
                    path="/"
                    exact
                  />

                  <Route path="/staffs">
                    <Route
                      index
                      element={<StaffsTable />}
                    />

                    <Route path=":staffId">
                      <Route
                        index
                        element={<SingleStaff />}
                      />

                      <Route
                        path="editprofile"
                        element={<EditStaff />}
                      />
                    </Route>

                    <Route
                      path="addUser"
                      element={<AddStaff />}
                    />
                  </Route>

                  <Route
                    path="/menuCatalogue"
                    element={<MenuCatalogue />}
                  />

                  <Route path="/productList">
                    <Route path="items">
                      <Route
                        index
                        element={<Items />}
                      />

                      <Route
                        path="add"
                        element={<AddItem />}
                      />

                      <Route
                        path=":id/edit"
                        element
                      />
                    </Route>

                    <Route path="stations">
                      <Route
                        index
                        element={<Stations />}
                      />
                    </Route>
                  </Route>
                </Route>
              </Routes>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
