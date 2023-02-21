import React from 'react';
import './Card.css'

const Card = ({name, date, time, guests}) => {
  return (
    <div className='card-container'>  
      <h2 className='font-large'>{name}</h2>
      <h3 className='font-med'>{date}</h3>
      <h3 className='font-med'>{time}</h3>
      <h3 className='font-med'>Number of guests: {guests}</h3>
      <button className='cancel-button'>Cancel</button>
    </div>
  )

}


export default Card