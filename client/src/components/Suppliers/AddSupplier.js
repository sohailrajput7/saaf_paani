import React,{useState} from 'react';
import SupplierTitle from './SupplierTitle';
import {useDispatch,useSelector} from 'react-redux'
import {Formik,useFormik} from 'formik'
import * as Yup from 'yup';

import {createSupplierStart} from '../../redux/actions/supplier.actions'

const AddSupplier = () => {


    const dispatch = useDispatch()

	const initialValues = {
		firstName:"sohail",
		lastName:"supplier",
		email:"sohailsupplier@mail.com",
		password:"admin1234",
		phoneNo:"03244323453",
        age:19,
        address:"32323",
        cnic:"3520232648483",
	}


	const validationSchema = Yup.object().shape({
		firstName:Yup.string().required().label("First Name"),
		lastName:Yup.string().required().label("Last Name"),
		email:Yup.string().required().email().label("Email"),
		password:Yup.string().required().label("Password"),
		address:Yup.string().required().label("Address"),
		phoneNo:Yup.string().required().label("Phone No"),
        age:Yup.number().required().label('Age'),
        cnic:Yup.string().min(13,"CNIC must be 13 characters long").max(13,"CNIC must be 13 characters long").required().label("CNIC"),
	})

    const handleCreateSupplier = async(values)=>{
        console.log("values");
		dispatch(createSupplierStart(values))
	}
    
	const {values,errors,touched,handleChange,handleSubmit}  = useFormik({
		initialValues,
		validationSchema,
		onSubmit:handleCreateSupplier
	})
    return (
        <>
            <SupplierTitle/>
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
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>CNIC</label>
                                                <input type="text" className="form-control" placeholder="CNIC *" required name="cnic" value={values.cnic} onChange={handleChange}/>
                                                {errors.cnic  && touched.cnic&&<div className="text-danger text-left mt-1 ml-2">{errors.cnic}</div>}
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
                                    <button type="submit" className="btn btn-primary" >Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default AddSupplier