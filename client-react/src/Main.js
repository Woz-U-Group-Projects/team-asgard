import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Article from "./Article";
import Contact from "./Contact";
import Team from "./Team";
import Tips from "./Tips";
import Login from "./Login";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Dog Blog (Animal Lovers)</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/article">Articles</NavLink></li>
            <li><NavLink to="/tips">Tips</NavLink></li>
            <li><NavLink to="/team">Team</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <span><li><NavLink to="/login" id="rightNav">Sign In</NavLink></li></span>
           
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/article" component={Article}/>
            <Route path="/tips" component={Tips}/>
            <Route path="/team" component={Team}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;