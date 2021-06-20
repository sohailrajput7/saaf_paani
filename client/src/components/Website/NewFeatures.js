import React from 'react';

const NewFeatures=()=> {
  return (
    <>
    <div className="p-20 m-t-20">
     <h2 className="mt-3 col-12  text-center">Upcoming Features</h2>
    <div className="row clearfix col-12 mx-auto p-10 m-t-20 d-flex justify-content-center">
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body">
                <h4>Subscription</h4>
              <p className="card-text">In future we will add Subscription module to our product so the users can easyly get the get on weekly/monthly subscription</p>
            </div>
          </span>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body">
                <h4>Order tracking</h4>
                <p className="card-text">In future we will add Order Tracing for the users easyness so that user can view thier orders devivery in better way</p>
            </div>
          </span>
        </div>
      </div>
    </div>
    </>
  );
}

export default NewFeatures;