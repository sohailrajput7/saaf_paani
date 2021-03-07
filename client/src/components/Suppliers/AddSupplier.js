import React,{useState} from 'react';
import SupplierTitle from './SupplierTitle';
import {useDispatch,useSelector} from 'react-redux'
import {Formik,useFormik} from 'formik'
import * as Yup from 'yup';


const AddSupplier = () => {


    const dispatch = useDispatch()
	const ptaNi = useSelector(state=>state.ptaNi)


	const initialValues = {
		firstName:"",
		lastName:"",
		email:"",
		password:"",
		phoneNo:"",
        age:'',
        address:"",
	}


	const validationSchema = Yup.object().shape({
		firstName:Yup.string().required().label("First Name"),
		lastName:Yup.string().required().label("Last Name"),
		email:Yup.string().required().email().label("Email"),
		password:Yup.string().required().label("Password"),
		address:Yup.string().required().label("Address"),
		phoneNo:Yup.string().required().label("Phone No"),
        age:Yup.string().required().label('Age'),
	})

    const handleSupplierPost = async(values)=>{

		//dispatch(addSupplier(values))
	}
    
	const {values,errors,touched,handleChange,handleSubmit}  = useFormik({
		initialValues,
		validationSchema,
		onSubmit:handleSupplierPost
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
                                            </div>
                                        </div>  
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" name="name" placeholder="Last Name" className="form-control" name="lastName" value={values.lastName} onChange={handleChange} />
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
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Phone No</label>
                                                <input type="number" className="form-control" placeholder="Phone No *" required name="phoneNo" value={values.phoneNo} onChange={handleChange}/>
                                            </div>
                                        </div>  
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Age (Age Must be gratter than 18)</label>
                                                <input min="18" type="number" name="age" placeholder="Age *" className="form-control" required name="age" value={values.age} onChange={handleChange}/>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row clearfix">    
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea name="address"  rows="5" placeholder="Address *" className="form-control no-resize" required name="address" value={values.address} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <br />
                                    <button type="submit" className="btn btn-primary" >Add Supplier</button>
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