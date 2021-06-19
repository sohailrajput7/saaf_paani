import React from "react";
import Login from "./Authentication/login";
import Signup from "./Authentication/signup";
import ForgotPassword from "./Authentication/forgotpassword";
import NotFound from "./Authentication/404";
import Maintenance from "./Authentication/maintenance";
import Dashboard from "./Dashboard/dashboard11";
import Chat from "./Messenger/chat";

import Suppliers from "./Suppliers/Suppliers";
import AddSupplier from "./Suppliers/AddSupplier";
import AllCustomers from "./Customer/AllCustomers";
import AddCustomer from "./Customer/AddCustomer";
import AllInventoryItems from "./Inventory/AllInventoryItems";
import AddInventoryItem from "./Inventory/AddInventoryItem";

const Routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    exact: true,
    pageTitle: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "login",
    exact: true,
    pageTitle: "Tables",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    exact: true,
    pageTitle: "Tables",
    component: Signup,
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    exact: true,
    pageTitle: "Tables",
    component: ForgotPassword,
  },
  {
    path: "/maintenance",
    name: "maintenance",
    exact: true,
    pageTitle: "Maintenance",
    component: Maintenance,
  },
  {
    path: "/notfound",
    name: "notfound",
    exact: true,
    pageTitle: "Tables",
    component: NotFound,
  },
  {
    path: "/messenger",
    name: "messenger",
    exact: true,
    pageTitle: "Messenger",
    component: Chat,
  },

  {
    path: "/suppliers/all",
    name: "suppliers",
    exact: true,
    pageTitle: "Suppliers",
    component: Suppliers,
  },
  ,
  {
    path: "/suppliers/add",
    name: "suppliers",
    exact: true,
    pageTitle: "Suppliers",
    component: AddSupplier,
  },
  {
    path: "/suppliers/:id",
    name: "suppliers",
    exact: true,
    pageTitle: "Suppliers",
    component: (props) => <AddSupplier {...props} isEditing />,
  },
  {
    path: "/customers/all",
    name: "customers",
    exact: true,
    pageTitle: "Customers",
    component: AllCustomers,
  },
  {
    path: "/customers/add",
    name: "customers",
    exact: true,
    pageTitle: "Customers",
    component: AddCustomer,
  },
  {
    path: "/customers/:id",
    name: "customers",
    exact: true,
    pageTitle: "Customers",
    component: (props) => <AddCustomer {...props} isEditing />,
  },
  {
    path: "/inventory/add",
    name: "inventory",
    exact: true,
    pageTitle: "Inventory",
    component: AddInventoryItem,
  },
  {
    path: "/inventory/all",
    name: "inventory",
    exact: true,
    pageTitle: "Inventory",
    component: AllInventoryItems,
  },
  {
    path: "/inventory/:id",
    name: "inventory",
    exact: true,
    pageTitle: "Inventory",
    component: (props) => <AddInventoryItem {...props} isEditing />,
  },
];

export default Routes;
