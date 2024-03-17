import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Setting the root element for the Modal component


// Functional component for the header of the landing form survey
const HeaderLandingFormSurvey = () => {


  const [navbar, setNavbar] = useState(false); // State for navbar visibility

 // Function to change background color based on scroll position
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true); // Set navbar state to true if scroll position is greater than or equal to 90
    } else {
      setNavbar(false); // Set navbar state to false otherwise
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? 'theme-main-menu sticky-menu  theme-menu-six bg-none fixed'
            : 'theme-main-menu sticky-menu  theme-menu-six bg-none'
        }
      >
        <div className="d-flex align-items-center">
          <div className="logo order-lg-1">
            {/* <a href="#home"> */}
            <Link to="/">
              <img
                src="/images/logo/cliqueLogo.png"
                width={'150px'}
                style={{ cursor: 'pointer' }}
                alt="brand"
              />
            </Link>
            {/* </a> */}
          </div>
          {/* End logo */}
        </div>
      </div>
      {/* /.theme-main-menu */}

    


    </>
  );
};

export default HeaderLandingFormSurvey;
