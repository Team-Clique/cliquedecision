import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FaStar } from 'react-icons/fa';

import styled from 'styled-components';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxWidth: '500px',
  height: '50%',
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};


const Rating = styled.div`
  cursor: pointer;
`;

function MyPreference() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="option-container">
      <h5>Know my preferences</h5>
      <p>Food preferences</p>
      <div className="checkbox-div" style={{ overflow: 'wrap' }}>
        <div className="checkbox-word">
          <p style={{ overflow: 'wrap' ,width:"300px"}}>
            Select food type, and we will decide for you!{' '}
            <i>Currently only serving the Bellevue, WA area</i>{' '}
          </p>
        </div>
        <FormGroup className="checkbox-group">
          <FormControlLabel control={<Checkbox />} label="Fast Food" />
          <FormControlLabel control={<Checkbox />} label="Mexican" />
          <FormControlLabel control={<Checkbox />} label="Chinese" />
          <FormControlLabel control={<Checkbox />} label="Japanese" />
          <FormControlLabel control={<Checkbox />} label="Dessert" />
          <FormControlLabel control={<Checkbox />} label="Italian" />
          <FormControlLabel
            control={<Checkbox />}
            label="Genuinely no preferences"
          />
        </FormGroup>
        <button className="decideBtn" onClick={handleOpen}>
          Decide for me
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontSize: '28px' }}
            >
              We Decided.....
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <p style={{ fontSize: '10px' }}>
                Currently only serving the Bellevue, WA area
              </p>
              <div style={{ display: 'flex' }}>
                <div
                  className="restaurantInfo"
                  style={{ height: '200px', width: '50%' }}
                >
                  <h5 style={{ color: 'darkred' }}>Restaurant Name</h5>
                  <div className="infobox">
                    <p style={{ fontSize: '10px' }}>rating</p>

                    <Rating>
                      <FaStar color={'red'} fontSize={'12px'} />
                      <FaStar color={'red'} fontSize={'12px'} />
                      <FaStar color={'red'} fontSize={'12px'} />
                      <FaStar color={'red'} fontSize={'12px'} />
                      <FaStar color={"rgb(192,192,192)"} fontSize={'12px'} />
                    </Rating>
                  </div>
                  <div className="infobox">
                    <p style={{ fontSize: '10px' }}>address</p>
                    <p style={{ fontSize: '12px' ,color:'black' }}> 1328 156th Ave NE, Bellevue, WA 98007</p>
                  </div>
                  <div className="infobox">
                    <p style={{ fontSize: '10px' }}>hours</p>
                    <p style={{ fontSize: '12px', color:'black' }}>10:45 AM ~ 5:30 PM</p>
                  </div>
                </div>
                <div className="restaurantImg">
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipOTrDmB6NRix0eEefCHKduCF2b24GY4q1MyNTVN=s680-w680-h510"
                    style={{
                      width: '200px',
                      height: '150px',
                      backgroundColor: 'grey',
                    }}
                    alt="img"
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <Button
                  className="decideBtn"
                  style={{ color: 'darkred' }}
                  onClick={handleClose}
                >
                  Try again
                </Button>
                <Button onClick={handleClose} style={{ color: 'white',backgroundColor:'darkred' }}>
                  Awesome!
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default MyPreference;
