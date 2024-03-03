import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function FirstPage(props) {
  const people = [
    {
     name: 'John',
      profile:'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
    },
    {
     name: 'Jane',
      profile:'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
    },
    {
     name: 'Jim',
    profile:'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
    },
    {
      name: 'Austin',
     profile:'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
     }

   ];
   return (
    <div className='product-body1'>
      <div className='product-top'>
        <h3 className='wt'>Decide for me</h3>
        <p className='wt'>An option randomizer to help you pick between some options</p>
        <button className='dfmBtn wt' onClick={() => props.setStage(2)}>Decide for me <FontAwesomeIcon icon={faArrowRight} /> </button>
      </div>
    </div>
  );
  
  
  
}

export default FirstPage