import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import doglogo from "./img/doglogo.png";
import Blog from "./Blog";
import Article from "./Article";
import Register from "./Register";
import Login from "./Login";
import Forgotpass from "./Forgotpass";
import Contact from "./Contact";
import Tips from "./Tips";
import Users from "./Users";
import Terms from "./Terms";
import Privacypolicy from "./Privacypolicy";
import Team from "./Team";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1><img src={doglogo} alt="DogBlog (For Animal Lovers"/></h1>
          <h1>Dog Blog (Animal Lovers)</h1>
          <br/>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/tips">Tips</NavLink></li>
            
             <li><NavLink to="/register">Register</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/forgotpass">Forgot Password</NavLink></li>
            
            <li><NavLink to="/users">Users</NavLink></li>
            
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/article">Articles</NavLink></li>
            <li><NavLink to="/tips">Tips</NavLink></li>
            <li><NavLink to="/team">Team</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <span><li><NavLink to="/login" id="rightNav">Sign In</NavLink></li></span>
           
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/article" component={Article}/>
            <Route path="/tips" component={Tips}/>
             
          </div>

          <div className="footer">
            <div class="container">
            © 2019 Copyright. All Rights Reserved.
             <NavLink to="/"> Home</NavLink> | <NavLink to="./terms">Terms of Use</NavLink> | 
             <NavLink to="./privacypolicy">Privacy Policy</NavLink>
            </div>
          </div>
             
         

          
        </div>
    
        </HashRouter>

        
    );

    
  }
}


 
export default Main;