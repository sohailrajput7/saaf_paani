import React from 'react'
const body = {
    columns: [
        {
            label: 'No',
            field: 'id',
            width: 10
        },
        {
            label: 'Name',
            field: 'name',
            width: 100,
           /* attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },*/
        },
        {
            label: 'Email',
            field: 'email',
            width: 150,
        },
        {
            label: 'Phone No',
            field: 'department',
            width: 100,
        },
        {
            label: 'Status',
            field: 'year',
            sort: 'asc',
            width: 50,
        },
        {
            label: 'Type',
            field: 'type',
            sort: 'disabled',
            width: 100,
        },
        {
            label: 'Status',
            field: 'status',
            sort: 'disabled',
            width: 70,
        },
        {
            label: '',
            field: 'view',
            sort: 'disabled',
            width: 30,
        }
    ],
    rows: [
        {
            id: 1,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 2,
            name: 'Parallel Computing',
            email: 'Politics',
            department: 'Architecture',
            year: 'Third Year',
            type: 'Newspaper',
            status: 'In Stock'
        },
        {
            id: 3,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 4,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 5,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 6,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 7,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 8,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 9,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 10,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 11,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 12,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock'
        },
        {
            id: 13,
            name: 'Management Basics',
            email: 'Designing',
            department: 'Architecture',
            year: 'Second Year',
            type: 'CD',
            status: 'Out Of Stock',
            view:<button>"View"</button>
        },
    ]
};

//body.rows.forEach(l=>l.push(<button>View</button>))
export default body;