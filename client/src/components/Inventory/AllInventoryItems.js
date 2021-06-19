import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable, MDBBtnGroup, MDBBtn } from "mdbreact";

import config from "../../config";
import { getAllInventoryItemsStart } from "../../redux/actions/inventory.actions";
import { push } from "connected-react-router";
import { useParams } from "react-router";

const inventoryDataTable = {
  columns: [
    {
      label: "ID",
      field: "id",
      width: 50,
    },
    {
      label: "Thumbnail",
      field: "thumbnail",
      width: 150,
    },
    {
      label: "Name",
      field: "name",
      width: 100,
    },
    {
      label: "Price",
      field: "price",
      width: 100,
    },
    {
      label: "Quantity",
      field: "quantity",
      width: 80,
    },
    {
      label: "Description",
      field: "description",
      width: 150,
    },
    {
      label: "Actions",
      field: "actions",
      width: 100,
    },
  ],
};

const AllInventoryItems = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const inventory = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(getAllInventoryItemsStart());
  }, []);

  const handleViewInventoryItem = (id) => {
    dispatch(push(`/inventory/${id}`));
  };

  const transformInventoryItemsData = () => {
    inventoryDataTable.rows = inventory.items?.map(
      (
        { name, quantity, price, description, thumbnail, _id: itemId },
        index
      ) => {
        return {
          id: index + 1,
          name,
          quantity,
          price,
          description,
          thumbnail: (
            <img
              src={config.baseURL + thumbnail}
              height="150px"
              width="150px"
            />
          ),
          actions: (
            <MDBBtnGroup>
              <MDBBtn
                color="primary"
                size="sm"
                onClick={() => handleViewInventoryItem(itemId)}
              >
                View
              </MDBBtn>
            </MDBBtnGroup>
          ),
        };
      }
    );

    return inventoryDataTable;
  };

  return (
    <>
      <div className="row clearfix mx-0">
        <div className="container-fluid">
          <div className="row clearfix mx-0">
            <div className="col-lg-12">
              <div className="card">
                <div className="body">
                  <div className="table-responsive">
                    <MDBDataTable
                      noBottomColumns
                      className="table table-hover js-basic-example dataTable table-custom spacing5"
                      entriesOptions={[5, 10, 15]}
                      entries={5}
                      paging
                      pagesAmount={15}
                      data={{ ...transformInventoryItemsData() }}
                      sortRows={["id"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllInventoryItems;
