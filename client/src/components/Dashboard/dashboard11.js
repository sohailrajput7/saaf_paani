import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DonutChart from "../common/dashboard11/donutChart";
import SalesChart from "../common/dashboard11/salesChart";

import { getDashboardStatsStart } from "../../redux/actions/analytics.actions";

const Dashboard11 = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.analytics.dashboard);

  useEffect(() => {
    dispatch(getDashboardStatsStart());
  }, []);

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
                    <h4 className="mb-0 font-weight-medium">
                      {dashboard.totalSales} Rs.
                    </h4>
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
                    <h4 className="mb-0 font-weight-medium">
                      {dashboard.totalProfit} Rs.
                    </h4>
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
                    <h4 className="mb-0 font-weight-medium">
                      {dashboard.suppliers}
                    </h4>
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
                    <h4 className="mb-0 font-weight-medium">
                      {dashboard.customers}
                    </h4>
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
                  <DonutChart
                    firstValue={dashboard.totalProfit || 0}
                    secondValue={dashboard.totalSales || 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard11;
