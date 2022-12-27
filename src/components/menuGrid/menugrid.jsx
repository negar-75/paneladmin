import React from "react";
import "./menugrid.scss";
import MenuItem from "../menuItem/menuItem";
import { getCategory } from "../../services/user.service";
import { firstLetterToUpperCase } from "../../services/functions";
import PaginatedItems from "../pagination/pagination";
import useApi from "../../hooks/useApi";

function Menugrid({ success, setSuccess, itemsPerPage }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const getCategories = useApi(getCategory);
  const { data, error, loading, request } = getCategories;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    request((currentPage - 1) * itemsPerPage, itemsPerPage);
    setSuccess(false);
  }, [success, currentPage]);

  React.useEffect(() => {
    setItems(data?.records);
  }, [data, currentPage]);

  return (
    <>
      <div className="grid-container">
        {items?.map((item) => {
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
      {data?.total_records_count > 0 && (
        <div className="pagination">
          <PaginatedItems
            allData={data?.total_records_count}
            itemsPerPage={itemsPerPage}
            items={items}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}

export default Menugrid;
