import React from 'react';
import './Card.css'

const Card = () => {
  return (
    <div className='card-container'>  
      <h2 className='font-large'>Name:</h2>
      <h3 className='font-med'>Date:</h3>
      <h3 className='font-med'>Time:</h3>
      <h3 className='font-med'>Number of guests:</h3>
      <button className='cancel-button'>Cancel</button>
    </div>
  )
}


export default Card