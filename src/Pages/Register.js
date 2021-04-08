import React from "react"
import axios from "axios"


class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    this.changeHand = this.changeHand.bind(this)
    this.submitHand = this.submitHand.bind(this)
  }
  changeHand(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  submitHand(e) {
    e.preventDefault()
    console.log("submitted")
    axios.post("http://localhost:4000/api/register", this.state)
    .then((res)=> {
      console.log(res.data)
      alert("registered")

    }).catch(e=>console.log(e))
  }

  render() {
    return (

      <div>
  <form onSubmit={this.submitHand} accept-charset="utf-8">
    <h1>Register</h1> <br /><br />
    <input type="text" name="username" id="username" value={this.state.username} onChange={this.changeHand} /><br />
    <input type="password" name="password" id="password" value={this.state.password} onChange={this.changeHand} /><br />
    <input type="email" name="email" id="email" value={this.state.email} onChange={this.changeHand} />
    <br /><br />
    <input type="submit" name="" id="" value="submit" />
      </form>
      </div>


    )
  }}


export default Register;