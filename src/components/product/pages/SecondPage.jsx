import MyPreference from './MyPreference'; 
import HeaderLandingFormSurvey from '../../clique-decision-landing/HeaderLandingFormSurvey'; 
import Footer from '../../clique-decision-landing/Footer'; 

import '../product.css'; 

// Component for the second page of the application
function SecondPage(props) {
  return (
    <div>
      {/* Header */}
      <HeaderLandingFormSurvey />

      {/* Body */}
      <div className='product-body'>
        <div className="product-body2">
          <div className="product-left">
            <h3>So, What are we eating today?</h3>
            {/* Preference option page */}
            <div className="option-container-nav" style={{ marginBottom:"100px"}}>
              <div className="nav-content" >
                <MyPreference /> {/* Rendering the MyPreference component to allow users to select food preferences */}
              </div>
            </div>
           
            {/* Footer */}
            <div style={{height:"30px",padding:"20px 0"}}></div> 
            <div className="theme-footer-nine lg-container">
              <div className="container">
                <Footer /> {/* Rendering the Footer component */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;