import React, {useEffect, useState} from 'react';
import {useParams,useHistory,useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Formik,useFormik} from 'formik'
import * as Yup from 'yup';

import {createCustomerStart,updateCustomerStart,deleteCustomerStart} from '../../redux/actions/customer.actions'

const AddCustomer = (props) => {
    const [isModal,setIsModal] = useState(false);

    const dispatch = useDispatch()
    const customer = useSelector(state=>state.customer);
    const params = useParams();

    const initialValues = {
        firstName:"sohail",
        lastName:"supplier",
        email:"sohailsupplier@mail.com",
        password:"admin1234",
        phoneNo:"03244323453",
        age:19,
        address:"32323",
    }


    const validationSchema = Yup.object().shape({
        firstName:Yup.string().required().label("First Name"),
        lastName:Yup.string().required().label("Last Name"),
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().label("Password"),
        address:Yup.string().required().label("Address"),
        phoneNo:Yup.string().required().label("Phone No"),
        age:Yup.number().required().label('Age'),
    })

    const handleFormSubmit = (values)=>{
        dispatch(createCustomerStart(values))
    }

    const {values,errors,touched,handleChange,handleSubmit,setValues}  = useFormik({
        initialValues,
        validationSchema,
        onSubmit:handleFormSubmit
    })

    const toggleModal = ()=>{
        setIsModal(!isModal);
    }

    useEffect(()=>{
        if(props.isEditing){
            const {user: {firstName, lastName, age, email, phoneNo}} = customer.customersData.find(cust=>cust._id === params.id)
            setValues({
                firstName,
                lastName,
                age,
                email,
                phoneNo,
                password:""
            })
        }
    },[])

    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>{props.isEditing?"Edit Customer":"Add Customer"}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">

                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">

                            <div className="body">
                                <form id="basic-form" onSubmit={handleSubmit} >

                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" className="form-control" placeholder="First Name *" required name="firstName" value={values.firstName} onChange={handleChange}/>
                                                {errors.firstName  && touched.firstName&&<div className="text-danger text-left mt-1 ml-2">{errors.firstName}</div>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" name="name" placeholder="Last Name" className="form-control" name="lastName" value={values.lastName} onChange={handleChange} />
                                                {errors.lastName  && touched.lastName&&<div className="text-danger text-left mt-1 ml-2">{errors.lastName}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="Email *" required name="email" value={values.email} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" name="name" placeholder="Password *" className="form-control" required name="password" value={values.password} onChange={handleChange}/>
                                                {errors.password  && touched.password&&<div className="text-danger text-left mt-1 ml-2">{errors.password}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Phone No</label>
                                                <input type="text" className="form-control" placeholder="Phone No *" required name="phoneNo" value={values.phoneNo} onChange={handleChange}/>
                                                {errors.phoneNo  && touched.phoneNo&&<div className="text-danger text-left mt-1 ml-2">{errors.phoneNo}</div>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Age (Age Must be at least than 18)</label>
                                                <input min="18" type="number" name="age" placeholder="Age *" className="form-control" required name="age" value={values.age} onChange={handleChange}/>
                                                {errors.age  && touched.age&&<div className="text-danger text-left mt-1 ml-2">{errors.age}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row clearfix">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea name="address"  rows="5" placeholder="Address *" className="form-control no-resize" required name="address" value={values.address} onChange={handleChange}></textarea>
                                                {errors.address  && touched.address&&<div className="text-danger text-left mt-1 ml-2">{errors.address}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <br />
                                    {props.isEditing?(
                                        <div>
                                            <button onClick={()=>dispatch(updateCustomerStart({...values,_id:params.id}))} type="button" className="btn btn-warning mr-4" >Update</button>
                                            <button type="button" className="btn btn-danger" onClick={toggleModal} >Delete</button>
                                        </div>
                                    ):<button type="submit" className="btn btn-primary">Create</button>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`modal fade  ${isModal? 'd-block show' : ''}`} id="exampleModal"  onClick={toggleModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete Customer Confirmation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this customer?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-round btn-default" data-dismiss="modal" onClick={toggleModal}>Close</button>
                            <button type="button" className="btn btn-round btn-primary" onClick={()=>dispatch(deleteCustomerStart({_id:params.id}))}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddCustomer