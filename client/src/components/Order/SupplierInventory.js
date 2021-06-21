import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import UserLayout from "../Shared/UserLayout";
import config from "../../config";

const SupplierInventory = (props) => {
  const params = useParams();
  const suppliers = useSelector((state) => state.supplier.nearBySuppliers);

  const { inventory, userId } = suppliers.find((sup) => sup._id === params.id);

  return (
    <UserLayout>
      <div className="d-flex justify-content-between">
        <div className="container-fluid">
          <div className="block-header">
            <div className="row clearfix">
              <div className="col-md-6 col-sm-12">
                <h1>{`${userId.firstName} ${userId.lastName}`} Inventory</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mr-2">
          <p className="mr-1">0</p>
          <i class="fa fa-shopping-cart fa-3x"></i>
        </div>
      </div>
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-hover table-custom spacing8">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Name</th>
                <th>Thumbnail</th>
                <th>Quantity</th>
                <th className="w100">Price</th>
                <th className="w100">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory?.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <h6 className="mb-0">{index + 1}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{item.itemId.name}</h6>
                    </td>
                    <td>
                      <img
                        src={config.baseURL + item.itemId.thumbnail}
                        alt="Avatar"
                        height="100px"
                        width="100px"
                      />
                    </td>
                    <td>
                      <span className="badge badge-primary">
                        {item.quantity}
                      </span>
                    </td>
                    <td>
                      <span>{item.price} Rs</span>
                    </td>
                    <td>
                      <button className="btn btn-primary">Add To Cart</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </UserLayout>
  );
};

export default SupplierInventory;
