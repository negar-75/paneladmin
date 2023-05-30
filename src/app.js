import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoutes from "./routes/privateRoutes";
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
import Layout from "./layout/layout";
import "./app.scss";
import "./style/darkStyle.scss";

function App() {
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
      {isloggedIn && (
        <Layout>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route
                path="/"
                element={<Home />}
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
                </Route>

                <Route
                  path="stations"
                  element={<Stations />}
                />
              </Route>
            </Route>
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
