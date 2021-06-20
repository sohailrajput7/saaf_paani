import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Commons=(props)=> {
  return (
      <section id="header" className="d-flex align-items-center margin-bottom">
        <div className="container fluid nav_bg">

          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>
                  <p className="my-3">
                  Safe drinking water is one of the basic requirements of healthy and hygienic living.
                   According to official survey reports, 79% water samples collected from rural areas of 
                   12 Districts in the province of Punjab were found to be unsafe for human consumption, while 88%
                    water samples collected from rural areas of 21 Districts of the province were also found to be unsafe.
                  </p>

                </div>

                <div className="col-lg-6 order-l order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated"></img>
                </div>
              </div>
              <div className="row">
                
                <div className="col-md-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <p className="my-3">
                  According to a report of Consumer Rights Commission of Pakistan, supported by the Japan Fund for Global Environment (JFGE), every 5th Pakistani child under the age of five suffers from waterborne diseases; and roughly 50 percent of mortality and 40% of hospital admissions are also caused by waterborne diseases. This situation is seriously hampering Pakistan’s endeavors to attain health and poverty-related Millennium Development Goals.

                  In order to address this situation, the Government of Punjab has endeavored to develop a program to improve water supply in terms of, both, access and quality of drinking water, especially in unserved and underserved areas i.e. rural and peri-urban areas of the province. The Punjab Saaf Pani Company (PSPC) has been established as a Special Purpose Vehicle (SPV) to conceive, plan, design, execute and manage projects for provision of safe drinking water to the communities living in those areas.
                  </p>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Commons;