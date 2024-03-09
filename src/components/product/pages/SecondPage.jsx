import React, {  useState } from 'react';
import MyPreference from './MyPreference';
import HeaderLandingFormSurvey from '../../clique-decision-landing/HeaderLandingFormSurvey';

function SecondPage(props) {
 
 

  return (
    <div>
    <HeaderLandingFormSurvey/>
    <div className="product-body2">
      <div className="product-left">
        <h3>So, What are we eating today?</h3>
        <div className="option-container-nav">
        
          <div className='nav-content' style={{marginLeft:"50px"}}>
              <MyPreference />
              
          </div>
        </div>
      </div>
   
      
      
    </div>
    </div>
  );
}

export default SecondPage;
