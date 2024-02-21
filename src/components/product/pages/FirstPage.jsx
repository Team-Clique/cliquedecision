import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function FirstPage(props) {
  return (
    <div className='product-body1'>
        <div className='product-top'>
        <h3>Decide for me</h3>
        <p>An option randomizer to help you pick a food place</p>
        <button className='dfmBtn' onClick={()=>props.setStage(curr=>curr+1)}>Decide for me <FontAwesomeIcon icon={faArrowRight}  /> </button>
      </div>
      <div className='product-bottom'>
        <h5>About "Decide for me"</h5>
        <p>We are groupof indecisice food lovers!</p>
        <div className='contributor-div'>
          <div>
            <img src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="pfp" style={{width:"100px", height:"100px"}}/>
            <p>name1</p>
          </div>
          
          <div>
            <img src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="pfp" style={{width:"100px", height:"100px"}}/>
            <p>name1</p>
          </div>
          
          <div>
            <img src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="pfp" style={{width:"100px", height:"100px"}}/>
            <p>name1</p>
          </div>
          
          <div>
            <img src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="pfp" style={{width:"100px", height:"100px"}}/>
            <p>name1</p>
          </div>
          
    
        </div>
      </div>
    </div>
  )
}

export default FirstPage