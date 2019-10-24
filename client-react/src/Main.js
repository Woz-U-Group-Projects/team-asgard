import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./src/components/Home";
import Article from "./src/components/Article";
import Contact from "./src/components/Contact";
import Users from "./src/components/Users";
 
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