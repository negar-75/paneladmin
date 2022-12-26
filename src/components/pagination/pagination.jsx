import React from "react";
import Pagination from "@mui/material/Pagination";
import { useTheme } from "@mui/material/styles";

function PaginatedItems({ itemsPerPage, allData, setCurrentPage }) {
  const [itemOffset, setItemOffset] = React.useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(allData / itemsPerPage);
  const theme = useTheme();

  const handlePageClick = (event, page) => {
    setCurrentPage(page);
    const newOffset = (page * itemsPerPage) % allData;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Pagination
        count={pageCount}
        color="secondary"
        onChange={handlePageClick}
        sx={theme.pagination}
      />
    </>
  );
}

export default PaginatedItems;
