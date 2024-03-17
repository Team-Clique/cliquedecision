import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ModalPage from './ModalPage';
import axios from 'axios';
import './style/myPreference.css';

// Component for managing user preferences
function MyPreference(props) {
  // State for managing modal visibility
  const [open, setOpen] = useState(false);
  // State for storing restaurant information fetched from the server
  const [allRestaurant, setAllRestaurant] = useState([]);
  // State for storing checked checkboxes
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  // Function to handle opening modal and fetching restaurant data
  const handleOpen = () => {
    //Logic to handle fetching restaurant data based on selected checkboxes
    let categories = selectedCheckboxes
      .filter((category) => category !== 'no')
      .join(',');
    if (categories === '') categories = 'restaurants'; // Default to 'restaurants' if no specific categories are selected
    axios
      .get(
        `https://clique-backend-9e7f0cecd4e1.herokuapp.com/searchRestaurant?categories=${categories}`
      )
      .then((response) => {
        console.log(response.data);
        setAllRestaurant(response.data.businesses); // Update allRestaurant state with fetched data
        setOpen(true);
      })
      .catch((err) => console.error(err));
  };

  // Function for "try again" button on modal page
  //  -> Remove the first restaurant from the list and show next restaurant
  const handleTryAgain = () => {
    const newRestaurants = [...allRestaurant];
    newRestaurants.shift();
    setAllRestaurant(newRestaurants);
  };

  // Effect hook to perform actions when allRestaurant state changes
  useEffect(() => {}, [allRestaurant]);

  // Function to handle closing modal
  const handleClose = () => {
    setSelectedCheckboxes([]);
    setOpen(false);
  };

  // Function to handle closing modal and returning to main page
  const goMainHandleClose = () => {
    setOpen(false);
    props.setStage(1);
  };

  // Function to handle checkbox change
  const handleChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((value) => value !== checkboxValue)
      );
    }
  };

  return (
    <div className="pref-container">
      <h5>Know my preferences</h5>

      <div className="checkbox-div">
        <div className="checkbox-word">
          <p style={{ overflow: 'wrap', width: '300px' }}>
            Select food type, and we will decide for you!{' '}
            <i>Currently only serving the Bellevue, WA area</i>{' '}
          </p>
        </div>
        <div>
          <FormGroup className="checkbox-group">
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="mexican"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('mexican')}
                />
              }
              label="Mexican"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="chinese"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('chinese')}
                />
              }
              label="Chinese"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="japanese"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('japanese')}
                />
              }
              label="Japanese"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="desserts"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('desserts')}
                />
              }
              label="Desserts"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="italian"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('italian')}
                />
              }
              label="Italian"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="taiwanese"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('taiwanese')}
                />
              }
              label="Taiwanese"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="burgers"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('burgers')}
                />
              }
              label="Burgers"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="seafood"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('seafood')}
                />
              }
              label="Seafood"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="shanghainese"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('shanghainese')}
                />
              }
              label="Shanghainese"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="thai"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('thai')}
                />
              }
              label="Thai"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="ramen"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('ramen')}
                />
              }
              label="Ramen"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="newamerican"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('newamerican')}
                />
              }
              label="New American"
            />
            <FormControlLabel
              className="checkbox-label"
              control={
                <Checkbox
                  value="hotpot"
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes('hotpot')}
                />
              }
              label="Hot pot"
            />
            {/* <FormControlLabel className="checkbox-label" control={<Checkbox value='no' onChange={handleChange} checked={selectedCheckboxes.includes("no")} />} label="No preference" /> */}
          </FormGroup>
        </div>

        {/* Decide button */}
        {selectedCheckboxes.length > 0 && (
          <button className="btn decideBtn" onClick={handleOpen}>
            Decide for me <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}

        {/* Modal component */}
        <ModalPage
          modalType={'preference'}
          preference={selectedCheckboxes} // Pass selectedCheckboxes as preference
          open={open}
          handleClose={handleClose}
          goMainHandleClose={goMainHandleClose}
          allRestaurant={allRestaurant}
          handleTryAgain={handleTryAgain}
        />
      </div>
    </div>
  );
}

export default MyPreference;
