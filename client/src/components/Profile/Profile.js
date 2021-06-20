import { validateYupSchema } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyProfile = (props) => {
  const authUser = useSelector((state) => state.auth.authUser);

  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>My Profile</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-4">
            <img src={authUser?.profilePicture} className="w-100 mb-3" />
            <h6>Profile Photo</h6>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="body">
                <form id="basic-form">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={authUser?.firstName}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          className="form-control"
                          placeholder="Quantity"
                          disabled
                          value={authUser?.lastName}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control"
                          disabled
                          value={authUser?.email}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Phone No</label>
                        <input
                          className="form-control"
                          disabled
                          value={authUser?.phoneNo}
                        />
                      </div>
                    </div>

                    <div className="col-lg-9 col-md-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          className="form-control"
                          disabled
                          value={authUser?.address}
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12">
                      <div className="form-group">
                        <label>Age</label>
                        <input
                          type="number"
                          className="form-control"
                          disabled
                          value={authUser?.age}
                        />
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

export default MyProfile;
