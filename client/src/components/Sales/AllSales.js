import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable } from "mdbreact";

import { getAllSuppliersSalesStart } from "../../redux/actions/sales.actions";
import config from "../../config";

const salesTableData = {
  columns: [
    {
      label: "ID",
      field: "id",
      width: 80,
    },
    {
      label: "Supplier Name",
      field: "supplierName",
      width: 80,
    },
    {
      label: "Invoice",
      field: "invoice",
      width: 80,
    },
    {
      label: "Purchased Date",
      field: "purchasedDate",
      width: 80,
    },
  ],
};

const AllSales = (props) => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(getAllSuppliersSalesStart());
  }, []);

  const transformSalesData = () => {
    salesTableData.rows = sales.data?.map(
      ({ supplierId: { userId }, createdAt, _id, invoice }, index) => {
        return {
          id: _id,
          supplierName: `${userId.firstName} ${userId.lastName}`,
          invoice: (
            <a href={config.baseURL + invoice} target="__blank">
              <i class="fa fa-file fa-2x text-white"></i>
            </a>
          ),
          purchasedDate: createdAt.toString("yyyy-mm-dd"),
        };
      }
    );

    return salesTableData;
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>Sales</h1>
            </div>
          </div>
        </div>
      </div>

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
                      data={{ ...transformSalesData() }}
                      sortRows={["id"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSales;
