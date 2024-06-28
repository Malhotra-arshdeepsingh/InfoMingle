import React, { Component } from  'react'
import Navbar from './Components/navbar';
import News from './Components/news';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return(
      <div>
        <Router>
        <Navbar/>  
        <Switch>
          <Route exact path="/"><News key="general" category="general"/></Route> 
          <Route exact path="/business"><News key="business" category="business"/></Route> 
          <Route exact path="/entertainment"><News key="entertainment" category="entertainment"/></Route>  
          <Route exact path="/health"><News key="health" category="health"/></Route> 
          <Route exact path="/science"><News key="science" category="science"/></Route> 
          <Route exact path="/sports"><News key="sports" category="sports"/></Route> 
          <Route exact path="/technology"><News key="technology" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
};
