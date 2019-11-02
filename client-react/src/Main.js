import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Article from "./Article";
import Tips from "./Tips";
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
            <li><NavLink to="/tips">Tips</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/article" component={Article}/>
            <Route path="/tips" component={Tips}/>
            <Route path="/users" component={Users}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;