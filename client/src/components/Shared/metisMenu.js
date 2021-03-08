const metisMenu = [
	{
		"id": 'main',
		"label": "Main"
	},
	{
		"id": 1,
		"icon": "home",
		"label": "Dashboard",
		"to": "/dashboard",
	},

	{
		"id": 2,
		"icon": "users",
		"label": "Customers",
		"to": "/customers",
		content:[
		{
			id:3,
			"label": "All Customers",
			"to": "/customers/all",
		},
		{
			id:4,
			"label": "Add Customer",
			"to": "/customers/add",
		},
		]
	},
	{
		"id":5,
		"icon": "user-plus",
		"label": "Suppliers",
		"to": "/suppliers",
		content:[
			{
				id:6,
				"label": "All Suppliers",
				"to": "/suppliers/all",
			},
			{
				id:7,
				"label": "Add Supplier",
				"to": "/suppliers/add",
			},
		]
	},
	{
		"id": 8,
		"icon": "dollar",
		"label": "Sales",
		"to": "/sales",
	},
	{
		"id": 9,
		"icon": "user-plus",
		"label": "Messenger",
		"to": "/messenger",
	},


];
export default metisMenu