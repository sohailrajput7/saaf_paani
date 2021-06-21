import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config";
import {
  checkoutStart,
  deleteItemFromCart,
} from "../../redux/actions/cart.actions";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [isModal, setIsModal] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0);

  const toggleModal = () => setIsModal(!isModal);

  const calculateTotalPrice = () => {
    return cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    dispatch(checkoutStart({ supplierId: cart.supplierId, items: cart.items }));
  };

  return (
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
              <th className="w100">Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item) => {
              return (
                <tr>
                  <td>
                    <h6 className="mb-0">{item.id}</h6>
                  </td>
                  <td>
                    <h6 className="mb-0">{item.name}</h6>
                  </td>
                  <td>
                    <img
                      src={config.baseURL + item.thumbnail}
                      alt="Avatar"
                      height="100px"
                      width="100px"
                    />
                  </td>
                  <td>
                    <span className="badge badge-primary">{item.quantity}</span>
                  </td>
                  <td>
                    <span>{item.price} Rs</span>
                  </td>
                  <td>
                    <span>{item.price * item.quantity} Rs</span>
                  </td>
                  <td
                    className="hover"
                    onClick={() =>
                      dispatch(deleteItemFromCart({ id: item.id }))
                    }
                  >
                    <i className="fa fa-chevron-down"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex align-items-center mb-3">
          <h3>Total Price : </h3>
          <h4 className="ml-3">{calculateTotalPrice()} Rs</h4>
        </div>
        <button className="btn btn-primary" onClick={toggleModal}>
          Checkout & Bill
        </button>
      </div>

      <div
        className={`modal fade  ${isModal ? "d-block show" : ""}`}
        id="exampleModal"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirm Checkout
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                <div className="form-group">
                  <label>Paid Amount (Rs)</label>
                  <input
                    type="text"
                    className="form-control round"
                    name="paidAmount"
                    onChange={(e) => setPaidAmount(e.target.value)}
                    placeholder="Enter Paid Amount"
                    value={paidAmount}
                  />
                </div>
                <div className="form-group">
                  <label>Return Amount (Rs)</label>
                  <input
                    type="text"
                    className="form-control round"
                    name="returnAmount"
                    placeholder="Enter Paid Amount"
                    value={
                      paidAmount > 0 ? paidAmount - calculateTotalPrice() : 0
                    }
                  />
                </div>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-round btn-default"
                data-dismiss="modal"
                onClick={toggleModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-round btn-primary"
                onClick={handleCheckout}
                disabled={paidAmount <= calculateTotalPrice()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
