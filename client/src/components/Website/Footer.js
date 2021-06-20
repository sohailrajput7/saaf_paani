import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>SAAF-PANNI INC</h4>
            <p className="list-unstyled">
              <li>342-420-6969</li>
              <li>safpani@gmail.com</li>
            </p>
            <h1 className="list-unstyled">
              <li>Lahore, Pakistan</li>
            </h1>
            <h3 className="list-unstyled">
              <li>G. T. Road, UET, Lahore, Punjab 39161</li>
            </h3>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Services</h4>
            <ui className="list-unstyled">
              <li>Order Water</li>
              <li>Supplier</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Upcomming Features</h4>
            <ui className="list-unstyled">
              <li>Subscription</li>
              <li>Order tracking</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SaafPanni | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;