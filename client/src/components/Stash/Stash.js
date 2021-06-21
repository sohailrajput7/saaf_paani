import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable, MDBBtnGroup, MDBBtn } from "mdbreact";
import config from "../../config";
import { push } from "connected-react-router";

import { getSupplierInventoryItemsStart } from "../../redux/actions/supplier.actions";

const stashDataTable = {
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

const Stash = (props) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.authUser);
  const inventory = useSelector((state) => state.supplier.inventory);

  useEffect(() => {
    if (authUser)
      dispatch(getSupplierInventoryItemsStart({ userId: authUser?._id }));
  }, [authUser]);

  const handleViewInventoryItem = (id) => {
    dispatch(push(`/stash/${id}`));
  };

  const transformInventoryItemsData = () => {
    stashDataTable.rows = inventory.map(
      (
        { price, quantity, itemId: { _id, name, thumbnail, description } },
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
                onClick={() => handleViewInventoryItem(_id)}
              >
                View
              </MDBBtn>
            </MDBBtnGroup>
          ),
        };
      }
    );

    return stashDataTable;
  };
  return (
    <>
      <div className="row clearfix mx-0">
        <div className="container-fluid">
          <div className="row clearfix mx-0">
            <div className="col-lg-12">
              <div className="card">
                <div className="body">
                  <div>
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

export default Stash;
