import React, { Component } from 'react';
import './App.css';
import getReservations from '../apiCalls';
import Container from '../Container/Container';
import Form from '../Form/Form';

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
        <Form />
        </div>
        <div className='resy-container'>
          <Container reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
