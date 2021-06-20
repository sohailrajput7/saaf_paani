import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { MDBDataTable, MDBBtnGroup, MDBBtn } from "mdbreact";

import { getAllSuppliersStart } from "../../redux/actions/supplier.actions";
import { setSupplierId } from "../../redux/actions/cart.actions";
import { createConversationStart } from "../../redux/actions/conversation.actions";
import SupplierTitle from "./SupplierTitle";
import config from "../../config";

const supplierDataTable = {
  columns: [
    {
      label: "ID",
      field: "id",
      width: 50,
    },
    {
      label: "First Name",
      field: "firstName",
      width: 100,
    },
    {
      label: "Last Name",
      field: "lastName",
      width: 100,
    },
    {
      label: "Age",
      field: "age",
      width: 80,
    },
    {
      label: "CNIC",
      field: "cnic",
      width: 150,
    },
    {
      label: "Email",
      field: "email",
      width: 150,
    },
    {
      label: "Phone No",
      field: "phoneNo",
      width: 150,
    },

    {
      label: "Verified",
      field: "verified",
      width: 80,
    },
    {
      label: "Actions",
      field: "actions",
      width: 200,
    },
  ],
};

const Suppliers = () => {
  const dispatch = useDispatch();
  const supplier = useSelector((state) => state.supplier);

  const handleSupplierView = (supplierId) => {
    dispatch(push(`/suppliers/${supplierId}`));
  };

  const handleAddToContact = (supplierId) => {
    dispatch(createConversationStart({ userTwoId: supplierId }));
  };

  const transformSuppliersData = () => {
    supplierDataTable.rows = supplier.suppliersData?.map(
      (
        {
          userId: { _id: user, firstName, lastName, age, email, phoneNo },
          cnic,
          verified,
          _id,
        },
        index
      ) => {
        return {
          id: index + 1,
          firstName,
          lastName,
          age,
          email,
          phoneNo,
          cnic: (
            <a href={config.baseURL + cnic} target="__blank">
              <img src={config.baseURL + cnic} height="150px" width="150px" />
            </a>
          ),
          verified: verified ? "Approved" : "Not Approved",
          actions: (
            <MDBBtnGroup>
              <MDBBtn
                color="success"
                size="sm"
                onClick={() => {
                  dispatch(setSupplierId(_id));
                  dispatch(push("/shop"));
                }}
              >
                Shop
              </MDBBtn>
              <MDBBtn
                color="warning"
                size="sm"
                onClick={() => handleAddToContact(user)}
              >
                Message
              </MDBBtn>
              <MDBBtn
                color="primary"
                size="sm"
                onClick={() => handleSupplierView(_id)}
              >
                View
              </MDBBtn>
            </MDBBtnGroup>
          ),
        };
      }
    );

    return supplierDataTable;
  };

  console.log("test", transformSuppliersData());

  useEffect(() => {
    dispatch(getAllSuppliersStart());
  }, []);

  return (
    <>
      <SupplierTitle />
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
                      data={{ ...transformSuppliersData() }}
                      // searchTop
                      sortRows={["id"]}
                      // searchBottom={false}
                      // onPageChange={()=>{ activePage: 2, pagesAmount: 5 }}
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

export default Suppliers;
