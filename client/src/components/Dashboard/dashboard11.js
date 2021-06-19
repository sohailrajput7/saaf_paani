import React from "react";

import DonutChart from "../common/dashboard11/donutChart";
import SalesChart from "../common/dashboard11/salesChart";

const Dashboard11 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="d-flex align-items-center">
                  <div className="icon-in-bg bg-indigo text-white rounded-circle">
                    <i className="fa fa-briefcase"></i>
                  </div>
                  <div className="ml-4">
                    <span>Total Sales</span>
                    <h4 className="mb-0 font-weight-medium">87,805 Rs.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="d-flex align-items-center">
                  <div className="icon-in-bg bg-azura text-white rounded-circle">
                    <i className="fa fa-credit-card"></i>
                  </div>
                  <div className="ml-4">
                    <span>Total Profit</span>
                    <h4 className="mb-0 font-weight-medium">53,651 Rs.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="d-flex align-items-center">
                  <div className="icon-in-bg bg-orange text-white rounded-circle">
                    <i className="fa fa-users"></i>
                  </div>
                  <div className="ml-4">
                    <span>Total Suppliers</span>
                    <h4 className="mb-0 font-weight-medium">4</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="d-flex align-items-center">
                  <div className="icon-in-bg bg-pink text-white rounded-circle">
                    <i className="fa fa-life-ring"></i>
                  </div>
                  <div className="ml-4">
                    <span>Total Customers</span>
                    <h4 className="mb-0 font-weight-medium">2</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Sales Chart</h2>
              </div>
              <div className="body text-center">
                <div id="Order_status" style={{ height: "268px" }}>
                  <DonutChart />
                </div>
                <hr />
                <div className="row clearfix">
                  <div className="col-6">
                    <h6 className="mb-0">3,095 Rs.</h6>
                    <small className="text-muted">Last Month</small>
                  </div>
                  <div className="col-6">
                    <h6 className="mb-0">2,763 Rs.</h6>
                    <small className="text-muted">This Month</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="card">
              <div className="header">
                <h2>Sales Reports</h2>
              </div>
              <div className="body">
                <small className="text-muted">Sales Throughout Year</small>
                <SalesChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard11;
