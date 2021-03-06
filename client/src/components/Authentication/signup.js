import React, { Component } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {Formik,useFormik} from 'formik'
import * as Yup from 'yup'

import {registerUserStart} from '../../redux/actions/auth.actions'

export default ({}) =>{

	const dispatch = useDispatch()
	const auth = useSelector(state=>state.auth)


	const initialValues = {
		firstName:"",
		lastName:"",
		email:"",
		address:"",
		password:"",
		phoneNo:""
	}


	const validationSchema = Yup.object().shape({
		firstName:Yup.string().required().label("First Name"),
		lastName:Yup.string().required().label("Last Name"),
		email:Yup.string().required().email().label("Email"),
		password:Yup.string().required().label("Password"),
		address:Yup.string().required().label("Address"),
		phoneNo:Yup.string().required().label("Phone No"),
	})

    const handleSignUpFormSubmit = (values)=>{
		dispatch(registerUserStart(values))
	}
    
	const {values,errors,touched,handleChange,handleSubmit}  = useFormik({
		initialValues,
		validationSchema,
		onSubmit:handleSignUpFormSubmit
	})


		return (
			<>

				<div class="pattern">
					<span class="red"></span>
					<span class="indigo"></span>
					<span class="blue"></span>
					<span class="green"></span>
					<span class="orange"></span>
				</div>
				<div className="auth-main particles_js">
					<div className="auth_div vivify popIn">
						<div className="auth_brand">
							<Link className="navbar-brand" to="/">
								<img src="../assets/images/icon.svg" width="30" height="30" className="d-inline-block align-top mr-2" alt="Logo" />
								Saaf Paani</Link>
						</div>
						<div className="card">
							<div className="body">
								<p className="lead">Create an account</p>
								{auth.error.signUp && <div className="alert alert-danger mt-2" role="alert">
									<i className="fa fa-times-circle"></i> {auth.error.signUp}
								</div>}
								<form className="form-auth-small m-t-20" onSubmit={handleSubmit}>
									<div className="form-group">
										<input type="text" className="form-control round" name="firstName" onChange={handleChange} placeholder="Your First name" value={values.firstName} />
										{errors.firstName && touched.firstName &&<div className="text-danger text-left mt-1 ml-2">{errors.firstName}</div>}									
									</div>
									<div className="form-group">
										<input type="text" className="form-control round" name="lastName" onChange={handleChange} placeholder="Your Last Name" value={values.lastName} />
										{errors.lastName  && touched.lastName&&<div className="text-danger text-left mt-1 ml-2">{errors.lastName}</div>}									
									</div>
										<div className="form-group">
										<input type="email" className="form-control round" name="email" onChange={handleChange} placeholder="Your Email" value={values.email} />
										{errors.email && touched.email &&<div className="text-danger text-left mt-1 ml-2">{errors.email}</div>}									
									</div>
										<div className="form-group">
										<input type="text" className="form-control round" name="address" onChange={handleChange} placeholder="Your Address" value={values.address} />
										{errors.address && touched.address &&<div className="text-danger text-left mt-1 ml-2">{errors.address}</div>}									
									</div>
									<div className="form-group">
										<input type="text" className="form-control round" name="phoneNo" onChange={handleChange} placeholder="Your Phone No" value={values.phoneNo} />
										{errors.phoneNo && touched.phoneNo &&<div className="text-danger text-left mt-1 ml-2">{errors.phoneNo}</div>}									
									</div>
									<div className="form-group">
										<input type="password" className="form-control round" name="password" onChange={handleChange} placeholder="Password" value={values.password} />
										{errors.password  && touched.password &&<div className="text-danger text-left mt-1 ml-2">{errors.password}</div>}									
									</div>
									<button type="submit" className="btn btn-primary btn-round btn-block">Register</button>
								</form>
								<div className="separator-linethrough"><span>OR</span></div>
								<button className="btn btn-round btn-signin-social"><i className="fa fa-facebook-official facebook-color"></i> Sign in with Facebook</button>
								<button className="btn btn-round btn-signin-social"><i className="fa fa-twitter twitter-color"></i> Sign in with Twitter</button>
									<div className="bottom mt-2">
										<span>Already have an account? <Link to="/login">Login</Link></span>
									</div>
							</div>
						</div>
					</div>
					<div id="particles-js"></div>
				</div>
			</>
		);

}
