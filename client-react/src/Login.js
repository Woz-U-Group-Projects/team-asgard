import React, { Component } from "react";
import {  Route } from "react-router-dom";
import Registration from "./Registration";

 
class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2> <br/>
<form>
        <div>
            <label> User Name : <input type="text" name="username" /></label>
        </div>
        <div>
            <label> Password: <input type="password" name="password" /></label>
        </div>
        <div>
            <input type="submit" value="Sign In" />
        </div>
    </form>
    
<br/>

<div> 
   <button type="button"> <Route path="/registration" component={Registration}/>
   REGISTER
   </button>
  
 
</div>
<br/> <br/>
<div>
<input type="submit" value="Forgot your password?" />
</div>

</div>
    );
  }
}
 
export default Login;