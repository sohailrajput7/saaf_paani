import Login from './Authentication/login';
import Signup from './Authentication/signup';
import ForgotPassword from './Authentication/forgotpassword';
import NotFound from './Authentication/404';
import Maintenance from './Authentication/maintenance';
import Dashboard from './Dashboard/dashboard11';
import SupplierInventory from './Pages/SupplierInventory/SupplierInventory';


const Routes = [

    {
        path: "/dashboard",
        name: 'dashboard',
        exact: true,
        pageTitle: "Dashboard",
        component: Dashboard
    },
 
    {
        path: "/login",
        name: 'login',
        exact: true,
        pageTitle: "Tables",
        component: Login
    },
    {
        path: "/signup",
        name: 'signup',
        exact: true,
        pageTitle: "Tables",
        component: Signup
    },
    {
        path: "/forgotpassword",
        name: 'forgotpassword',
        exact: true,
        pageTitle: "Tables",
        component: ForgotPassword
    },
    {
        path: "/maintenance",
        name: 'maintenance',
        exact: true,
        pageTitle: "Maintenance",
        component: Maintenance
    },
    {
        path: "/notfound",
        name: 'notfound',
        exact: true,
        pageTitle: "Tables",
        component: NotFound
    },
       {
        path: "/supplierInventory",
        name: 'supplierInventory',
        exact: true,
        pageTitle: "Inventory",
        component: SupplierInventory
    },
       {
        path: "/",
        name: 'dashboard',
        exact: true,
        pageTitle: "Dashboard",
        component: Dashboard
    },

    // {
    //     path: "/supplier",
    //     name: 'suppliers',
    //     exact: true,
    //     pageTitle: "Suppliers",
    //     component: Suppliers
    // },
];

export default Routes;