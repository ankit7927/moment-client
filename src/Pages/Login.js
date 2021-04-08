import React from "react"
import axios from "axios"
import {
  Redirect,
  withRouter
} from "react-router-dom"


class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.changeHand = this.changeHand.bind(this)
    this.submitHand = this.submitHand.bind(this)
  }

  redirectToHome = () => {
    const path = `/${this.state.username}`
    const {
      history
    } = this.props;
    if (history) history.push(path);
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
    axios.post("http://localhost:4000/api/login", this.state)
    .then((res)=> {
      // alert(res.data)
      // history.push("/")
      //  return (<Redirect to="/" />);
      this.redirectToHome();
    }).catch(e=>console.log(e))
  }



  render() {
    return (

      <div>
  <form onSubmit={this.submitHand} accept-charset="utf-8">
    <h1>Log in</h1> <br /><br />
    <input type="text" name="username" id="username" value={this.state.username} onChange={this.changeHand} /><br />
    <input type="password" name="password" id="password" value={this.state.password} onChange={this.changeHand} /><br />

    <input type="submit" name="" id="" value="submit" />
      </form>
      </div>


    )
  }}


export default withRouter(Login);