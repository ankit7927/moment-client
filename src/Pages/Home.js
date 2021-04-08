import React from "react"
import axios from "axios"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      userEmail: 'no user'
    }

  }


  url = `http://localhost:4000/api/test/${this.state.username}`

  makeReq() {
    axios.get(this.url)
    .then((res)=> {
      this.setState({
        userEmail: res.data
      })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.makeReq()
    console.log("i am called componentDidMount")
  }


  render() {
    return (<>

      <h1>home</h1>
      <h2>{this.state.userEmail}</h2> < /> )
    }}


  export default Home;