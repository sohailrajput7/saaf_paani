import React, { Component } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';
import {Formik,useFormik} from 'formik'
import * as Yup from 'yup'

import {loginUserStart} from '../../redux/actions/auth.actions'

export default function({}){

	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth)

	const initialValues = {
		email:"",
		password:""
	}


	const validationSchema = Yup.object().shape({
		email:Yup.string().required().email().label("Email"),
		password:Yup.string().required().label("Password"),
	})

    const handleLoginFormSubmit = (values)=>{
		dispatch(loginUserStart(values))
	}
    
	const {values,errors,touched,handleChange,handleSubmit}  = useFormik({
		initialValues,
		validationSchema,
		onSubmit:handleLoginFormSubmit
	})


		return (
			<>
				<div class="pattern">
					<span className="red"></span>
					<span className="indigo"></span>
					<span className="blue"></span>
					<span className="green"></span>
					<span className="orange"></span>
				</div>
				<div className="auth-main particles_js">
					<div className="auth_div vivify popIn">
						<div className="auth_brand">
							<Link className="navbar-brand" to="/">
								<img src="../assets/images/icon.svg" width="30" height="30" className="d-inline-block align-top mr-2" alt="Oculux logo" />
									Saaf Paani
							</Link>
						</div>
						<div className="card">
							<div className="body">
								<p className="lead">Login to your account</p>
								{auth.error.login && <div className="alert alert-danger mt-2" role="alert">
									<i className="fa fa-times-circle"></i> {auth.error.login}
								</div>}
								<form className="form-auth-small m-t-20" action="/" onSubmit={handleSubmit}>
									<div className="form-group">
										<input type="email" className="form-control round" name="email" onChange={handleChange} placeholder="Your Email" value={values.email} />
										{errors.email && touched.email &&<div className="text-danger text-left mt-1 ml-2">{errors.email}</div>}									
									</div>
									<div className="form-group">
										<input type="password" className="form-control round" name="password" onChange={handleChange} placeholder="Password" value={values.password} />
										{errors.password  && touched.password &&<div className="text-danger text-left mt-1 ml-2">{errors.password}</div>}									
									</div>
									<button type="submit" className="btn btn-primary btn-round btn-block">LOGIN</button>
									<div className="bottom">
										<span className="helper-text m-b-10"><i className="fa fa-lock"></i> <Link to="/forgotpassword">Forgot password?</Link></span>
										<span>Don't have an account? <Link to="/signup">Register</Link></span>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div id="particles-js"></div>
				</div>
			</>
		);
	}

