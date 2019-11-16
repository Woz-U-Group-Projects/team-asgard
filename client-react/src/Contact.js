import React from "react";
import {
  Route,
  Link,
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
      <li><Link to="/login">Sign In</Link></li>
      <Route path="/login" component={Login}/>
            <li><Link to="/register">Register</Link></li>
            <Route path="/register" component={Register}/>
            <li><Link to="/forgotpass">Forgot Password</Link></li>
            <Route path="/forgotpass" component={Forgotpass}/>
           
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


