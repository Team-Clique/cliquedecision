import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
function DecideBtw() {

    const [optList, setOptList] = useState([0]);
    const containerRef = useRef(null);
    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, [optList]);
    const onAddDetailDiv = () => {
        let countArr = [...optList];
        let counter = countArr.slice(-1)[0];
        counter += 1;
        countArr.push(counter); // index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
        setOptList(countArr);
      };
  
  return (
    <div className="option-container">
    <h5>Can't decide between a few options?</h5>
    <p>up to 7 options</p>
    <div
      className="optionInputBox"
      ref={containerRef}
      style={{ maxHeight: '200px', overflowY: 'auto' }}
    >
      {optList.map((item, i) => (
        <div className="option-div" key={i}>
          <label>Food Option {i + 1} </label>
          <input type="text" />
        </div>
      ))}

      {optList.length < 7 ? (
        <button className="optionBtn add" onClick={onAddDetailDiv}>
          + Add option
        </button>
      ) : (
        <p style={{ color: 'red' }}> ** can't not add more option</p>
      )}
      <button className="optionBtn decide">Decide for me <FontAwesomeIcon icon={faArrowRight}  /> </button>
    </div>
  </div>
  )
}

export default DecideBtw