import React, { Component } from "react";
import {  Link } from "react-router-dom";


 
class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2> <br/>
<form>
        <div>
            <label> User Name : <input type="text" name="username" placeholder="Enter your username"/></label>
        </div>
        <div>
            <label> Password: <input type="password" name="password" placeholder="Enter your password"/></label>
        </div>
        <div>
            <input type="submit" value="Sign In" />
        </div>
    </form>
    
<br/>

<div> 
<Link to="./Registration">
     <button type="button">
          Register
     </button>
 </Link>
 
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