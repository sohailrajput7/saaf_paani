import React, { Component } from 'react';
import { connect } from 'react-redux';
import { io } from "socket.io-client";


import './App.css';
import Layout from './components/Shared/Layout';
import Login from './components/Authentication/login';
import SignUp from './components/Authentication/signup';
import ForgotPassword from './components/Authentication/forgotpassword';
import NotFound from './components/Authentication/404';
import Maintenance from './components/Authentication/maintenance';
<<<<<<< HEAD
import SupplierInventory from './components/Pages/SupplierInventory/SupplierInventory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
=======
import Logout from "./components/Logout/logout";
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
>>>>>>> 4a830426f014bdb8c86efac960530d2aedc5141e

import { authUserStart } from "./redux/actions/auth.actions";

class App extends Component {

	componentDidMount(){
		this.props.authUserStart()
	}

	render() {
		const { themeColor, fontStyle, lightVersion, RtlVersion, offcanvas, miniSidebar, horizontalMenu, miniHover } = this.props
		document.getElementsByTagName('body')[0].className = `${themeColor} ${fontStyle}${lightVersion ? ' light_version' : ''}${RtlVersion ? ' rtl' : ''}${offcanvas ? ' offcanvas-active' : ''}${horizontalMenu ? ' h-menu' : ''}${miniSidebar ? ' mini_sidebar' : ''}${miniHover ? ' mini_hover' : ''}`;
		return (
			<div
				ref={leftSidebar => {
					this.leftSidebar = leftSidebar;
				}}
			>
					<Switch>
						<Route path="/signup" component={SignUp} />
						<Route path="/login" component={Login} />
						<Route path="/forgotpassword" component={ForgotPassword} />
						<Route path="/notfound" component={NotFound} />
						<Route path="/maintenance" component={Maintenance} />
<<<<<<< HEAD
						<Route path="/supplierInventory" component={SupplierInventory} />
=======
						<Route path="/logout" component={Logout}/>
>>>>>>> 4a830426f014bdb8c86efac960530d2aedc5141e
						<Route component={Layout} />
						<Redirect to="/login" />
					</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	themeColor: state.settings.themeColor,
	fontStyle: state.settings.fontStyle,
	lightVersion: state.settings.lightVersion,
	RtlVersion: state.settings.RtlVersion,
	offcanvas: state.settings.offcanvas,
	horizontalMenu: state.settings.horizontalMenu,
	miniSidebar: state.settings.miniSidebar,
	miniHover: state.settings.miniHover,
})

const mapDispatchToProps = dispatch => ({
	authUserStart:()=>dispatch(authUserStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)