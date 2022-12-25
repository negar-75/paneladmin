import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ itemsPerPage, allData, setCurrentPage }) {
  const [itemOffset, setItemOffset] = React.useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allData / itemsPerPage);

  const handlePageClick = (event) => {
    console.log("ok");
    setCurrentPage(event.selected);

    const newOffset = (event.selected * itemsPerPage) % allData;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
