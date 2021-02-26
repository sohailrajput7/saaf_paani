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
			"label": "All Customers",
			"to": "/",
		},
		{
			"label": "Add Customer",
			"to": "/",
		},
		{
			"label": "Update Customer",
			"to": "/",
		},
		{
			"label": "Delete Customer",
			"to": "/",
		},
		]
	},
	{
		"id": 3,
		"icon": "user-plus",
		"label": "Suppliers",
		"to": "/",
		content:[
			{
				"label": "All Suppliers",
				"to": "/",
			},
			{
				"label": "Add Supplier",
				"to": "/",
			},
			{
				"label": "Update Supplier",
				"to": "/",
			},
			{
				"label": "Delete Supplier",
				"to": "/",
			},
		]
	},
	// {
	// 	"id": 4,
	// 	"icon": "credit-card",
	// 	"label": "Revenue",
	// 	"to": "/",
	// },
	// {
	// 	"id": 5,
	// 	"icon": "envelope",
	// 	"label": "Messages",
	// 	"to": "/",
	// },
	// {
	// 	"id": 6,
	// 	"icon": "cogs",
	// 	"label": "Settings",
	// 	"to": "/",
	// },
];

export default metisMenu	