import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";

import { getAllInventoryItemsStart } from "../../redux/actions/inventory.actions";
import { addItemToCart } from "../../redux/actions/cart.actions";
import { push } from "connected-react-router";

const Shop = (props) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getAllInventoryItemsStart());
  }, []);

  const handleItemAddToCart = ({ _id, name, thumbnail, price, quantity }) => {
    dispatch(addItemToCart({ id: _id, name, thumbnail, price, quantity }));
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row justify-content-between">
            <div className="col-md-11 col-sm-12">
              <h1>Shop</h1>
            </div>
            <div
              className="col-md-1 d-flex hover"
              onClick={() => dispatch(push("/shop/checkout"))}
            >
              <p className="mr-1">{cart.totalItems}</p>
              <i class="fa fa-shopping-cart fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0">
        {inventory.items?.map((item) => (
          <ItemCard item={item} onItemAdd={handleItemAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
