import React from "react";
import config from "../../config";

const SupplierCard = ({ data, onCardClick }) => {
  return (
    <div className="col-lg-3 col-md-6 hover" onClick={onCardClick}>
      <span className="card">
        <div className="body text-center">
          <img
            className="img-thumbnail rounded-circle"
            src={data.userId.profilePicture}
            alt=""
          />
          <h6 className="mt-3">{`${data.userId.firstName} ${data.userId.lastName}`}</h6>
          <div className="text-center text-muted">{data.userId.email}</div>
        </div>
        <div className="card-footer text-center">
          <div className="row clearfix">
            <div className="col-6">
              <i className="fa fa-archive font-22" />
              <div>
                <span className="text-muted">
                  {data.inventory.length} Items
                </span>
              </div>
            </div>
            <div className="col-6">
              <i className="fa fa-phone font-22" />
              <div>
                <span className="text-muted">{data.userId.phoneNo}</span>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default SupplierCard;
