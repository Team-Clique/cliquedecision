import React, { useState } from 'react'
import './product.css';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function Product() {
 
 const [stage,setStage]= useState(1);

 
 return (
    <div className='product-body'>
      { stage === 1 && <FirstPage  setStage={setStage}/> }
      { stage === 2 && <SecondPage setStage={setStage}/> }
  
    </div>
  )
}

export default Product