import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function FirstPage(props) {

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