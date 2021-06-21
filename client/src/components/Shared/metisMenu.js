import Roles from "../../constants/Roles";

const metisMenu = [
  {
    id: "main",
    label: "Main",
  },
  {
    id: 1,
    icon: "home",
    label: "Dashboard",
    to: "/dashboard",
    role: Roles.ADMIN,
  },

  {
    id: 2,
    icon: "users",
    label: "Customers",
    to: "/customers",
    role: Roles.ADMIN,
    content: [
      {
        id: 3,
        icon: "eye",
        label: "All Customers",
        to: "/customers/all",
      },
      {
        id: 4,
        icon: "plus",
        label: "Add Customer",
        to: "/customers/add",
      },
    ],
  },
  {
    id: 5,
    icon: "user-plus",
    label: "Suppliers",
    to: "/suppliers",
    role: Roles.ADMIN,
    content: [
      {
        id: 6,
        icon: "eye",
        label: "All Suppliers",
        to: "/suppliers/all",
      },
      {
        id: 7,
        icon: "plus",
        label: "Add Supplier",
        to: "/suppliers/add",
      },
    ],
  },
  {
    id: 10,
    icon: "archive",
    label: "Inventory",
    to: "/inventory",
    role: Roles.ADMIN,
    content: [
      {
        id: 11,
        icon: "eye",
        label: "View Inventory",
        to: "/inventory/all",
      },
      {
        id: 12,
        icon: "plus",
        label: "Add Inventory",
        to: "/inventory/add",
      },
    ],
  },
  {
    id: 13,
    icon: "archive",
    label: "Stash",
    to: "/stash",
    role: Roles.SUPPLIER,
  },
  {
    id: 8,
    icon: "dollar",
    label: "Sales",
    to: "/sales",
    role: Roles.ADMIN,
  },
  {
    id: 9,
    icon: "user-plus",
    label: "Messenger",
    to: "/messenger",
  },
];
export default metisMenu;
