import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import doglogo from "./img/doglogo.png";
import Article from "./Article";
import Register from "./Register";
import Login from "./Login";
import Forgotpass from "./Forgotpass";
import Contact from "./Contact";
import Users from "./Users";
import Terms from "./Terms";
import Privacypolicy from "./Privacypolicy";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1><img src={doglogo} alt="DogBlog (For Animal Lovers"/></h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/article">Article</NavLink></li>
             <li><NavLink to="/register">Register</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/forgotpass">Forgot Password</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/article" component={Article}/>
            <Route path="/register" component={Register}/>
             <Route path="/login" component={Login}/>
              <Route path="/forgotpass" component={Forgotpass}/>
              <Route path="/contact" component={Contact}/>
               <Route path="/terms" component={Terms}/>
              <Route path="/privacypolicy" component={Privacypolicy}/>
              <Route path="/users" component={Users}/>
        
            
             
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