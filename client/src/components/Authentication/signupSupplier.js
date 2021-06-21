import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

import useGeoLocation from "../../hooks/useGeoLocation";

import {
  registerSupplierStart,
  removeMessage,
} from "../../redux/actions/auth.actions";

export default ({}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const location = useGeoLocation();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    phoneNo: "",
    cnic: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label("First Name"),
    lastName: Yup.string().required().label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
    address: Yup.string().required().label("Address"),
    phoneNo: Yup.string().required().label("Phone No"),
    age: Yup.number()
      .min(18, "Age must be at least 18")
      .max(60, "Age can not be greater than 60")
      .label("Age"),
    cnic: Yup.string().required().label("CNIC"),
  });

  const handleSignUpFormSubmit = (values) => {
    dispatch(registerSupplierStart({ ...values, location }));
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleSignUpFormSubmit,
    });

  return (
    <>
      <div className="auth-main particles_js">
        <div className="auth_div vivify popIn">
          <div className="auth_brand mt-4">
            <Link className="navbar-brand" to="/">
              <img
                src="../assets/images/icon.svg"
                width="30"
                height="30"
                className="d-inline-block align-top mr-2"
                alt="Logo"
              />
              Saaf Paani
            </Link>
          </div>
          <div className="card">
            <div className="body">
              <p className="lead">Sign Up As Supplier</p>
              {auth.error.signUp && (
                <div className="alert alert-danger mt-2" role="alert">
                  <i className="fa fa-times-circle"></i> {auth.error.signUp}
                </div>
              )}
              {auth.message && (
                <div
                  className="alert alert-success mt-2"
                  role="alert"
                  onClick={() => dispatch(removeMessage())}
                >
                  <i className="fa fa-times-circle"></i> {auth.message}
                </div>
              )}
              <form className="form-auth-small m-t-20" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control round"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="Your First name"
                    value={values.firstName}
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="text-danger text-left mt-1 ml-2">
                      {errors.firstName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control round"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Your Last Name"
                    value={values.lastName}
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="text-danger text-left mt-1 ml-2">
                      {errors.lastName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control round"
                    name="email"
                    onChange={handleChange}
                    placeholder="Your Email"
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <div className="text-danger text-left mt-1 ml-2">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control round"
                    name="address"
                    onChange={handleChange}
                    placeholder="Your Address"
                    value={values.address}
                  />
                  {errors.address && touched.address && (
                    <div className="text-danger text-left mt-1 ml-2">
                      {errors.address}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control round"
                    name="phoneNo"
                    onChange={handleChange}
                    placeholder="Your Phone No"
                    value={values.phoneNo}
                  />
                  {errors.phoneNo && touched.phoneNo && (
                    <div className="text-danger text-left mt-1 ml-2">
                      {errors.phoneNo}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control round"
                    name="age"
                    onChange={handleChange}
                    placeholder="Your Age"
                    value={values.age}
                  />
                  {errors.age && touched.age && (
                    <div className="text-danger text-left mt-1 ml-2">
                      {errors.age}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control round"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className="text-danger text-left mt-1 ml-2">
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      id="inputGroupFile01"
                      name="cnic"
                      type="file"
                      className="custom-file-input"
                      onChange={(e) => {
                        setFieldValue("cnic", e.currentTarget.files[0]);
                        console.log(e.currentTarget.files);
                      }}
                    />
                    <label
                      className="custom-file-label pr-5"
                      htmlFor="inputGroupFile01"
                    >
                      {values.cnic ? values.cnic.name : "Choose file *"}
                    </label>
                  </div>
                </div>
                {errors.cnic && touched.cnic && (
                  <div className="text-danger text-left mt-1 ml-2">
                    {errors.cnic}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-round btn-block"
                >
                  Register
                </button>
              </form>
              <div className="bottom mt-3 d-flex flex-column">
                <span>
                  Want to be a Customer?
                  <Link to="/signup">Register As Customer</Link>
                </span>
                <span>
                  Already Have An Account?
                  <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-js"></div>
      </div>
    </>
  );
};
