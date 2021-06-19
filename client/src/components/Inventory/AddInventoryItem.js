import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import placeHolderItemImg from "../../assets/images/placeholder-item.jpg";
import {
  addInventoryItemStart,
  deleteInventoryItemStart,
  updateInventoryItemStart,
} from "../../redux/actions/inventory.actions";
import config from "../../config";

const InventoryItem = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const inventory = useSelector((state) => state.inventory);

  const [isModal, setIsModal] = useState(false);

  const initialValues = {
    name: "",
    quantity: "",
    purchasedPrice: "",
    price: "",
    thumbnail: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    quantity: Yup.string().required().label("Quantity"),
    purchasedPrice: Yup.number().required().label("Purchased Price"),
    price: Yup.number().required().label("Price"),
    thumbnail: Yup.string().required().label("Thumbnail"),
    description: Yup.string().required().label("Description"),
  });

  const handleFormSubmit = (values) => {
    dispatch(addInventoryItemStart(values));
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const getImageSrc = (image) => {
    return image
      ? typeof image === "object"
        ? URL.createObjectURL(image)
        : config.baseURL + image
      : placeHolderItemImg;
  };

  useEffect(() => {
    if (props.isEditing) {
      const { name, quantity, purchasedPrice, price, description, thumbnail } =
        inventory.items?.find((item) => item._id === params.id);
      setValues({
        name,
        purchasedPrice,
        price,
        quantity,
        description,
        thumbnail,
      });
    }
  }, []);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>
                {props.isEditing ? "Edit Inventory Item" : "Add Inventory Item"}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-3">
            <img src={getImageSrc(values.thumbnail)} className="w-100 mb-3" />
            <h6>Thumbnail</h6>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  id="inputGroupFile01"
                  name="thumbnail"
                  type="file"
                  className="custom-file-input"
                  onChange={(e) =>
                    setFieldValue("thumbnail", e.currentTarget.files[0])
                  }
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {values.thumbnail && !props.isEditing
                    ? values.thumbnail.name
                    : "Choose file *"}
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="body">
                <form id="basic-form" onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name *"
                          required
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.name && touched.name && (
                        <div className="text-danger text-left mt-1 ml-2">
                          {errors.name}
                        </div>
                      )}
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
                          value={values.quantity}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.quantity && touched.quantity && (
                        <div className="text-danger text-left mt-1 ml-2">
                          {errors.quantity}
                        </div>
                      )}
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Purchased Price</label>
                        <input
                          type="number"
                          placeholder="Purchased Price *"
                          className="form-control"
                          required
                          name="purchasedPrice"
                          value={values.purchasedPrice}
                          onChange={handleChange}
                        />
                        {errors.purchasedPrice && touched.purchasedPrice && (
                          <div className="text-danger text-left mt-1 ml-2">
                            {errors.purchasedPrice}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          type="number"
                          placeholder="Price *"
                          className="form-control"
                          required
                          name="price"
                          value={values.price}
                          onChange={handleChange}
                        />
                        {errors.price && touched.price && (
                          <div className="text-danger text-left mt-1 ml-2">
                            {errors.price}
                          </div>
                        )}
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
                          value={values.description}
                          onChange={handleChange}
                        ></textarea>
                        {errors.description && touched.description && (
                          <div className="text-danger text-left mt-1 ml-2">
                            {errors.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <br />
                  {props.isEditing ? (
                    <div>
                      <button
                        onClick={() =>
                          dispatch(
                            updateInventoryItemStart({
                              ...values,
                              _id: params.id,
                            })
                          )
                        }
                        type="button"
                        className="btn btn-warning mr-4"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => toggleModal()}
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <button type="submit" className="btn btn-primary">
                      Create
                    </button>
                  )}
                </form>
                <div
                  className={`modal fade  ${isModal ? "d-block show" : ""}`}
                  id="exampleModal"
                  onClick={toggleModal}
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Delete Customer Confirmation
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
                        <p>Are you sure you want to delete this Item?</p>
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
                          onClick={() =>
                            dispatch(
                              deleteInventoryItemStart({ _id: params.id })
                            )
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryItem;
