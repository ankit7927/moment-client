import React from "react"
import {
  Link
} from "react-router-dom"

class Navbar extends React.Component {

  render() {
    return (

      <div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="logout">Logout</Link></li>
    <li><Link to="register">Register</Link></li>
    <li><Link to="login">Login</Link></li>
      </ul>
      </div>

    )}



}

export default Navbar;