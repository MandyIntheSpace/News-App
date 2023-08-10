import React, { Component } from 'react'
import loading from './loadingcomponent.gif'
import './Navbar.css'

export class Nn extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='imagel' src={loading} alt="loading" />
      </div>
    )
  }
}

export default Nn
