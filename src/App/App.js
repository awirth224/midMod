import React, { Component } from 'react';
import './App.css';
import getReservations from '../apiCalls';
import Card from '../Card/Card.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    return getReservations()
      .then(data => this.setState({ reservations: data }))
    
  }



  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Card reservation={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
