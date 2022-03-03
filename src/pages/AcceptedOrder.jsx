import React from 'react'
import { Link } from 'react-router-dom'

//import { CartItem, Button } from '../components'
//import acceptedImg from '../assets/img/accepted.png'


const AcceptedOrder = () => {
	
	return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Your order has been accepted  <i>❤</i></h2>
        <p>
        Wait for the courier.<br />
          
        </p>
        <br></br>
        <Link to="/" className="button button--black">
          <span> Home</span>
        </Link>
      </div>
    </div>
    )
}

export default AcceptedOrder