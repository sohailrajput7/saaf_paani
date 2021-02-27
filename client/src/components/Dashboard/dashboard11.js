import React from 'react';
import { Link } from 'react-router-dom';
import { Donut } from 'react-dial-knob'
// import { Sparklines, SparklinesBars } from 'react-sparklines';
import DonutChart from '../common/dashboard11/donutChart';
import SalesChart from '../common/dashboard11/salesChart';
import Sparklinechart from '../common/dashboard11/sparklinechart';
import Sparklinecustomchart from '../common/dashboard11/sparklinecustomchart';
import SparkLineBoxChart from '../common/dashboard11/sparkLineBoxChart';
import FinancialChart from '../common/dashboard11/financialChart';
import BarChart from '../common/dashboard11/barChart';

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
                                    <div className="icon-in-bg bg-indigo text-white rounded-circle"><i className="fa fa-briefcase"></i></div>
                                    <div className="ml-4">
                                        <span>Total Revenue</span>
                                        <h4 className="mb-0 font-weight-medium">$87,805</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-azura text-white rounded-circle"><i className="fa fa-credit-card"></i></div>
                                    <div className="ml-4">
                                        <span>Total Profit</span>
                                        <h4 className="mb-0 font-weight-medium">$53,651</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-orange text-white rounded-circle"><i className="fa fa-users"></i></div>
                                    <div className="ml-4">
                                        <span>Total Cost</span>
                                        <h4 className="mb-0 font-weight-medium">$25,805</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-pink text-white rounded-circle"><i className="fa fa-life-ring"></i></div>
                                    <div className="ml-4">
                                        <span>Total Quantity</span>
                                        <h4 className="mb-0 font-weight-medium">$13,651</h4>
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
                                <h2>Order status</h2>
                            </div>
                            <div className="body text-center">
                                <div id="Order_status" style={{ height: "268px" }}>
                                    <DonutChart />
                                </div>
                                <hr />
                                <div className="row clearfix">
                                    <div className="col-6">
                                        <h6 className="mb-0">$3,095</h6>
                                        <small className="text-muted">Last Month</small>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="mb-0">$2,763</h6>
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
                                <small className="text-muted">Sales Performance for Online and Offline Revenue</small>
                                <SalesChart />
                            </div>
                        </div>
                    </div>
                </div>

               

                <div className="row clearfix">
                    <div className="col-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Product Summary</h2>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-custom spacing5 mb-0">
                                    <thead>
                                        <tr>
                                            <th>#No</th>
                                            <th>Client Name</th>
                                            <th>Product ID</th>
                                            <th>Product</th>
                                            <th>Product Cost</th>
                                            <th>Payment Mode</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#01</td>
                                            <td>Sean Black</td>
                                            <td>PRO12345</td>
                                            <td>Mi LED Smart TV 4A 80</td>
                                            <td>$14,500</td>
                                            <td>Online Payment</td>
                                            <td><span className="badge badge-success">Delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td>#02</td>
                                            <td>Evan Rees</td>
                                            <td>PRO8765</td>
                                            <td>Thomson R9 122cm (48 inch) Full HD LED TV </td>
                                            <td>$30,000</td>
                                            <td>Cash on delivered</td>
                                            <td><span className="badge badge-primary">Add Cart</span></td>
                                        </tr>
                                        <tr>
                                            <td>#03</td>
                                            <td>David Wallace</td>
                                            <td>PRO54321</td>
                                            <td>Vu 80cm (32 inch) HD Ready LED TV</td>
                                            <td>$13,200</td>
                                            <td>Online Payment</td>
                                            <td><span className="badge badge-warning">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>#04</td>
                                            <td>Julia Bower</td>
                                            <td>PRO97654</td>
                                            <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
                                            <td>$15,100</td>
                                            <td>Cash on delivered</td>
                                            <td><span className="badge badge-secondary">Delivering</span></td>
                                        </tr>
                                        <tr>
                                            <td>#05</td>
                                            <td>Kevin James</td>
                                            <td>PRO4532</td>
                                            <td>HP 200 Mouse &amp; Wireless Laptop Keyboard </td>
                                            <td>$5,987</td>
                                            <td>Online Payment</td>
                                            <td><span className="badge badge-danger">Shipped</span></td>
                                        </tr>
                                        <tr>
                                            <td>#06</td>
                                            <td>Theresa Wright</td>
                                            <td>PRO6789</td>
                                            <td>Digisol DG-HR3400 Router </td>
                                            <td>$11,987</td>
                                            <td>Cash on delivered</td>
                                            <td><span className="badge badge-success">Delivering</span></td>
                                        </tr>
                                        <tr>
                                            <td>#07</td>
                                            <td>Sebastian Black</td>
                                            <td>PRO4567</td>
                                            <td>Dell WM118 Wireless Optical Mouse</td>
                                            <td>$4,700</td>
                                            <td>Online Payment</td>
                                            <td><span className="badge badge-secondary">Add to Cart</span></td>
                                        </tr>
                                        <tr>
                                            <td>#08</td>
                                            <td>Kevin Glover</td>
                                            <td>PRO32156</td>
                                            <td>Dell 16 inch Laptop Backpack </td>
                                            <td>$678</td>
                                            <td>Cash On delivered</td>
                                            <td><span className="badge badge-cyan">Delivered</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}


export default Dashboard11