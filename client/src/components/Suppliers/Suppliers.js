import React from 'react';
import { MDBDataTable } from 'mdbreact';
import SupplierTitle from './SupplierTitle'
import AllSuppliers from './AllSuppliers'
const Suppliers = () => {

    return (
        <>
            <SupplierTitle/>
            <div className="row clearfix">
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <div className="table-responsive">
                                        <MDBDataTable
                                            noBottomColumns
                                            className="table table-hover js-basic-example dataTable table-custom spacing5"
                                            entriesOptions={[7, 15, 25]}
                                            entries={7}
                                            paging
                                            pagesAmount={15}
                                            data={AllSuppliers}
                                            // searchTop
                                            sortRows={['id']}
                                            // searchBottom={false}
                                            // onPageChange={()=>{ activePage: 2, pagesAmount: 5 }}
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

export default Suppliers