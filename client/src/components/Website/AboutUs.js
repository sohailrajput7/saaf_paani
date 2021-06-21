import React from 'react';
import MainScreen from './MainScreen';
const AboutUs=()=> {
  return (
    <MainScreen>
    <div className=" bg-dark p-20 m-t-20">
     <h2 className="mt-3 col-12  text-center">About Us</h2>
    <div className="row clearfix col-12 mx-auto p-10 m-t-20">
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body text-center">
              <img className="img-thumbnail rounded-circle" src="../assets/images/sm/sohail.jpg" alt="" />
              <h6 className="mt-3">Sohail Naseer</h6>
              <div className="text-center text-muted">Developer</div>
            </div>
            <div className="body">
              <p className="card-text">Developer works on the new emarging stacks to create owesome products</p>
            </div>
          </span>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body text-center">
              <img className="img-thumbnail rounded-circle" src="../assets/images/sm/hamza.jpg" alt="" />
              <h6 className="mt-3">Hamza Tariq</h6>
              <div className="text-center text-muted">Developer</div>
            </div>
            <div className="body">
              <p className="card-text">Developer works on the customisation,Scalability and better performance of the product </p>
            </div>
          </span>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body text-center">
              <img className="img-thumbnail rounded-circle" src="../assets/images/sm/zahid.jpg" alt="" />
              <h6 className="mt-3">Zahid Saeed</h6>
              <div className="text-center text-muted">Developer</div>
            </div>
            <div className="body">
              <p className="card-text"> Developer works on the new emarging stacks to create owesome products</p>
            </div>
          </span>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="card">
            <div className="body text-center">
              <img className="img-thumbnail rounded-circle" src="../assets/images/sm/sohail.jpg" alt="" />
              <h6 className="mt-3">Fatima </h6>
              <div className="text-center text-muted">Developer</div>
            </div>
            <div className="body">
              <p className="card-text">UI/UX Designer work for the design of UI to provide easiness to the customers/clients in the application .</p>
            </div>
          </span>
        </div>
      </div>
    </div>
    </MainScreen>
  );
}

export default AboutUs;