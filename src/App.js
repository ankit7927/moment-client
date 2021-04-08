import Register from "./Pages/Register"
import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import PageNotFound from "./Pages/Pagenotfound"
import {
  Switch,
  Route
} from "react-router-dom"

class App extends React.Component {

  render() {
    return (
      <div>
       <Navbar />
       <Switch>
          <Route exact path="/:username=undef" component={() => <Home username={this.username} />} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route component={PageNotFound} />
       </Switch>
      </div>
    );
  }}

export default App;