import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {push} from 'connected-react-router'
import {MDBDataTable, MDBBtnGroup, MDBBtn} from 'mdbreact';

import {getAllCustomersStart} from '../../redux/actions/customer.actions'
import {createConversationStart} from '../../redux/actions/conversation.actions'

const customerDataTable = {
    columns:[
        {
            label: 'ID',
            field: 'id',
            width: 50,
        },
        {
            label: 'First Name',
            field: 'firstName',
            width: 100,
        },
        {
            label: 'Last Name',
            field: 'lastName',
            width: 100,
        },
        {
            label: 'Age',
            field: 'age',
            width: 80,
        },
        {
            label: 'Email',
            field: 'email',
            width: 150,
        },
        {
            label: 'Phone No',
            field: 'phoneNo',
            width: 150,
        },
        {
            label: 'Actions',
            field: 'actions',
            width: 200,
        },
    ]
}


const AllCustomers = (props) => {

    const dispatch = useDispatch();
    const customer = useSelector(state=>state.customer);



    const handleSupplierView = (customerId)=>{
        dispatch(push(`/customers/${customerId}`))
    }

    const handleAddToContact = (customerId)=>{
        dispatch(createConversationStart({userTwoId:customerId}))
    }

    const transformSuppliersData = ()=>{
        customerDataTable.rows =  customer.customersData?.map(({user: {_id:userId,firstName, lastName, age, email, phoneNo}, cnic, verified,_id}, index) => {
            return {
                id: index + 1,
                firstName,
                lastName,
                age,
                email,
                phoneNo,
                actions: <MDBBtnGroup>
                    <MDBBtn color="warning" size="sm" onClick={()=>handleAddToContact(userId)}>Message</MDBBtn>
                    <MDBBtn color="primary" size="sm" onClick={()=>handleSupplierView(_id)}>View</MDBBtn>
                </MDBBtnGroup>

            }
        });

        return customerDataTable
    }

    console.log("test",transformSuppliersData())

    useEffect(()=>{
        dispatch(getAllCustomersStart())
    },[])



    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>All Customers</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clearfix mx-0">
                <div className="container-fluid">
                    <div className="row clearfix mx-0">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <div className="table-responsive">
                                        <MDBDataTable
                                            noBottomColumns
                                            className="table table-hover js-basic-example dataTable table-custom spacing5"
                                            entriesOptions={[5,10,15]}
                                            entries={5}
                                            paging
                                            pagesAmount={15}
                                            data={{...transformSuppliersData()}}
                                            sortRows={['id']}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllCustomers;