import React from "react";
import {
  Route,
  NavLink,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Forgotpass from "./Forgotpass";
 

class Contact extends React.Component {
  onSubmit = () => {    this.props.history.push('/')  }
  render() {
    return (
      <div>
        <h2> Coming Soon!</h2>
        <p>We are constantly improving our site to serve you better, please bear with us as we build a new page for you to enjoy.</p>
      <div>
     
      <div className="content">
           
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgotpass" component={Forgotpass}/>
           
             
          </div>

     <li><NavLink to="/login"> Sign In</NavLink> </li> 
     <li> <NavLink to="./register">Register</NavLink></li>
    <li> <NavLink to="./forgotpass">Forgot Password</NavLink></li> <br/><br/>
     

      </div>
        
        
      
      <form>
        Contact Us:<br/>
        
        <input placeholder="name" type="name" />
         <br/>
        <input placeholder="email" type="email" />
        <br/>
        <button onClick={this.onSubmit}>Submit</button>      
        </form>
        </div>
    )
  }
}
 
export default Contact;


