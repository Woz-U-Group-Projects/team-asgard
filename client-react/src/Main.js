import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Article from "./Article";
import Contact from "./Contact";
import Users from "./Users";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Dog Blog (Animal Lovers)</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/article">Article</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/article" component={Article}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/users" component={Users}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;