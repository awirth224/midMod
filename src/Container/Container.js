import React from "react";
import Card from "../Card/Card";
import './Container.css'

const Container = ({reservations}) => {
  const reservationCards = (reservations.map(reso => {
    return (
      <Card
        name={reso.name}
        date={reso.date}
        time={reso.time}
        guests={reso.number}
        key={reso.id}
      />
    )
  }))
  return (
    <div className="reservations-container">
      {reservationCards}
    </div>
  )
}

export default Container