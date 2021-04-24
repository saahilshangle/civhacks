import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Welcome from "./views/welcome";
import Stuff from "./views/stuff";
import Contact from "./views/contact";
// import NavBar from './views/NavBar';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            {/* <NavBar /> */}
            <div>
            <h1>Meet Me Here</h1>
            <ul className="header">
                <li><NavLink exact to="/">Welcome</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Welcome}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;