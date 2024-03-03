import React, {  useState } from 'react';
import MyPreference from './MyPreference';

function SecondPage(props) {
  const [opt, setOpt] = useState(0);
 

  return (
    <div className="product-body2">
      <div className="product-left">
        <h3>So, What are we eating today?</h3>
        <div className="option-container-nav">
          <ul className="nav nav-underline">
            
            <li className="nav-item">
              <button
                onClick={() => setOpt(1)}
                className={`nav-link ${opt === 1 ? 'active' : ''}`}
                style={{
                  color: opt === 1 ? 'darkred' : 'lightcoral', // Apply different text colors
                }}
                data-bs-toggle="tab"
              >
                Just know my preference
              </button>
            </li>
          </ul>
          <div className='nav-content'>
              <MyPreference setStage={props.setStage}/>
              
          </div>
        </div>
      </div>
      <div className='product-right'></div>
      
      
    </div>
  );
}

export default SecondPage;
