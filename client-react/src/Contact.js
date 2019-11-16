import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Forgotpass from "./Forgotpass";

class Contact extends Component {
render() {
    return (
          <div>
            <h2> Coming Soon!</h2>

            <p>We are constantly improving our site to serve you better, please bear with us as we build a new page for you to enjoy.</p>
            {/* <form>
            	Contact Us:<br/>
           		<input placeholder="name" type="name" /><br/>
            	<input placeholder="email" type="email" /><br/>
            	<button onClick={this.onSubmit}>Submit</button>      
            </form> */}
          
		  <div>
           	 <Router>
             	<ul>
					<li><Link to="./Login">Sign In</Link></li>
					<li><Link to="./Register">Register</Link></li>
					<li><Link to="./Forgotpass">Forgot Password</Link></li>
       			</ul>
  
              <Switch>
          		<Route exact path="/login" component={withRouter(Login)} /> 
          		<Route exact path="/register" component={withRouter(Register)} /> 
          		<Route exact path="/forgotpass" component={withRouter(Forgotpass)} /> 
        	  </Switch>
			</Router>
		  </div>
         </div>
    )
  }
}
export default Contact;
