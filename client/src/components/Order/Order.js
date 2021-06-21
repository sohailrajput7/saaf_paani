import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserLayout from "../Shared/UserLayout";
import SupplierCard from "./SupplierCard";

import { getAllNearBySuppliersStart } from "../../redux/actions/supplier.actions";
import { push } from "connected-react-router";

const Order = (props) => {
  const dispatch = useDispatch();
  const [radius, setRadius] = useState(70);

  const suppliers = useSelector((state) => state.supplier.nearBySuppliers);
  const authUser = useSelector((state) => state.auth.authUser);

  useEffect(() => {
    if (authUser) {
      dispatch(
        getAllNearBySuppliersStart({
          long: authUser?.location.coordinates[0],
          latt: authUser?.location.coordinates[1],
          radius,
        })
      );
    }
  }, [authUser, radius]);

  return (
    <UserLayout>
      <div className="mt-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1>Suppliers</h1>
          <div className="form-group">
            <input
              type="number"
              className="form-control round"
              name="radius"
              onChange={(e) => setRadius(e.target.value)}
              placeholder="Radius"
              value={radius}
            />
          </div>
        </div>
        <div className="row">
          {suppliers?.map((supplier) => {
            return (
              <SupplierCard
                data={supplier}
                onCardClick={() =>
                  dispatch(push(`/supplier/inventory/${supplier._id}`))
                }
              />
            );
          })}
        </div>
      </div>
    </UserLayout>
  );
};

export default Order;
