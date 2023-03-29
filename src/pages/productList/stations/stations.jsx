import React from "react";
import ProductListTabs from "../../../components/productListTab/productListTab";
import TableHeader from "../../../components/TableHeader/TableHeader";
import ProductListTable from "../../../components/ProductListTable/ProductListTable";
import { stationColumns } from "../../../sources/productListSource/productListColumns";
import AddStationModal from "../../../components/addStationModal/addStationModal";
import useGetApi from "../../../hooks/useGetApi";
import { getStations, deletStation } from "../../../services/user.service";

function StationsDesktop() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const getStationsApi = useGetApi(getStations);
  const [pageNumber, setPageNumber] = React.useState(0);
  const { loading, request, data, error } = getStationsApi;

  React.useEffect(() => {
    request(pageNumber, 10);
  }, [isModalOpen]);

  return (
    <div className="product-list">
      <div className="table">
        <ProductListTabs />
        <TableHeader onClickFunc={() => setIsModalOpen(true)} />
        <ProductListTable
          cols={stationColumns}
          rowsArr={data}
          deletFun={deletStation}
        />
      </div>

      <AddStationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default StationsDesktop;
