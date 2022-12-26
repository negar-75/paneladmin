import React from "react";
import "./menugrid.scss";
import MenuItem from "../menuItem/menuItem";
import { getCategory } from "../../services/user.service";
// import Pagination from "@mui/material/Pagination";
import { firstLetterToUpperCase } from "../../services/functions";
import PaginatedItems from "../pagination/pagination";

function Menugrid({ success, setSuccess, itemsPerPage }) {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [allData, setAllData] = React.useState();

  React.useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await getCategory((currentPage - 1) * 6);
        console.log(res);
        setItems(res.data.records);
        setAllData(res.data.total_records_count);
        setSuccess(false);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [success, currentPage]);

  return (
    <>
      <div className="grid-container">
        {items.map((item) => {
          return (
            <div
              className="grid-item"
              key={item.id.toString()}
            >
              <MenuItem
                title={firstLetterToUpperCase(item.category_name)}
                image={item.logo_url}
                id={item.id}
                items={items}
                setItems={setItems}
                status={item.status}
              />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <PaginatedItems
          allData={allData}
          itemsPerPage={itemsPerPage}
          items={items}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default Menugrid;
