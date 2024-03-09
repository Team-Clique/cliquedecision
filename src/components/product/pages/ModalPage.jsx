import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FaStar } from 'react-icons/fa';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxWidth: '500px',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const decideRandom = (arr) => {
  if (!arr || arr.length === 0) return null; // Handle case when arr is undefined or empty
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

function ModalPage({ handleClose, open, preference, goMainHandleClose, allRestaurant, handleTryAgain }) {
  // Check if allRestaurant is defined and not null
  const filteredRestaurants = allRestaurant ? allRestaurant.filter(restaurant => restaurant.categories.some(cat => preference.includes(cat.alias))) : [];

  const selectedRestaurant = decideRandom(filteredRestaurants);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" style={{ fontSize: '28px' }}>
            We Decided.....
          </Typography>

          <Typography>
            <div className="randomResult gradient-text">
              {selectedRestaurant && (
                <div style={{ display: "flex" }}>
                  <div
                    className="restaurantInfo"
                    style={{ height: "200px", width: "50%" }}
                  >
                    <h5 style={{ color: "darkred" }}>{selectedRestaurant.name}</h5>
                    <div className="infobox">
                      <p className='sm' >Rating</p>

                 
                    <div >
                      <p style={{fontSize:"12px"}}> {selectedRestaurant.rating}</p>
                      {[...Array(5)].map((_, i) => {
                        if (i < Math.floor(selectedRestaurant.rating)) {
                          return <FaStar key={i} color="red" fontSize={"12px"} />;
                        } else if (i === Math.floor(selectedRestaurant.rating) && selectedRestaurant.rating % 1 !== 0) {
                          const fractionalPart = selectedRestaurant.rating % 1;
                          const color = `rgba(250,0,0,${fractionalPart})`;
                          return (
                              <FaStar color={color} fontSize={"12px"}  />
                          );
                        } else {
                          return <FaStar key={i} color="rgb(192,192,192)" fontSize={"12px"} />;
                        }
                      })}
                    </div>

                    </div>
                    <div className="infobox">
                      <p style={{ fontSize: "10px" }}>Address:</p>
                      <p style={{ fontSize: "12px", color: "black" }}>
                        {selectedRestaurant.location.display_address.join(', ')}
                      </p>
                    </div>
                    <div className="infobox">
                      <p style={{ fontSize: "10px" }}>Phone Number:</p>
                      <p style={{ fontSize: "12px", color: "black" }}>
                        {selectedRestaurant.display_phone}
                      </p>
                    </div>
                  </div>
                  <div className="restaurantImg">
                    <img
                      src={selectedRestaurant.image_url}
                      style={{
                        width: "200px",
                        height: "150px",
                        backgroundColor: "grey",
                      }}
                      alt="Restaurant"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className='modalBtn' style={{ display: 'flex', justifyContent: 'end' }}>

        
              <Button className="right" onClick={handleClose}>
                <a href='/'> Awesome!</a>
             
              </Button>
              <Button className="left" onClick={handleTryAgain}>
                Try again
              </Button>
              <Button className='closeButton' onClick={handleClose}>
                Close
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalPage;

