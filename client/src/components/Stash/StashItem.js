import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router";

import config from "../../config";

const StashItem = (props) => {
  const params = useParams();

  const inventory = useSelector((state) => state.supplier.inventory);
  const {
    itemId: { thumbnail, name, description },
    price,
    quantity,
  } = inventory.find((item) => item.itemId._id === params.id);

  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>Stash Item</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-3">
            <img
              src={config.baseURL + thumbnail}
              alt="Thumbnail"
              className="w-100 mb-3"
            />
            <h6>Thumbnail</h6>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="body">
                <form id="basic-form">
                  <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name *"
                          required
                          name="name"
                          value={name}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Quantity</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Quantity *"
                          required
                          name="quantity"
                          value={quantity}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          type="number"
                          placeholder="Purchased Price *"
                          className="form-control"
                          required
                          value={price}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          rows="5"
                          placeholder="Description *"
                          className="form-control"
                          required
                          name="description"
                          value={description}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StashItem;
