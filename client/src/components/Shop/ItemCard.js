import React from "react";
import config from "../../config";

const ItemCard = ({ item, onItemAdd }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card c_grid c_yellow">
        <div className="body text-center ">
          <div className="circle">
            <img
              className="rounded-circle h-100"
              src={config.baseURL + item.thumbnail}
            />
          </div>
          <h6 className="mt-3 mb-2">{item.name}</h6>
          {item.quantity ? (
            <button
              className="btn btn-default btn-sm"
              onClick={() => onItemAdd(item)}
            >
              Add To Cart
            </button>
          ) : (
            <button className="btn btn-default btn-sm" disabled>
              Out Of Stock
            </button>
          )}
          <div className="row text-center mt-4">
            <div className="col-lg-6 border-right">
              <label className="mb-0">Quantity</label>
              <h4 className="font-20">{item.quantity}</h4>
            </div>
            <div className="col-lg-6">
              <label className="mb-0">Price</label>
              <h4 className="font-20">{item.price} Rs</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
