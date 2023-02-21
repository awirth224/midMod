import React, {Component} from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: null
    }
  }

  // handleClick = () => {
  //   this.setState({
  //     name: "",
  //     date: "",
  //     time: "",
  //     number: null
  //   })
  // }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form className="inputs-container">
        <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={e => this.handleChange(e)}/>
        <input type='text' placeholder='Date (mm/dd)' name='date' value={this.state.date} onChange={e => this.handleChange(e)}/>
        <input type='text' placeholder='Time' name='time' value={this.state.time} onChange={e => this.handleChange(e)}/>
        <input type='number' placeholder='Number of Guests' name='guests' value={this.state.number} onChange={e => this.handleChange(e)}/>
        <button className='reservation-button'>Make Reservation</button>
      </form>
    )
  }
}


export default Form