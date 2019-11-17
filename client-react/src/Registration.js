import React, { Component } from "react";
 
class Registration extends Component {
  render() {
    return (
      <div>


<h1>Register:</h1>

    <form>
  		<div>
            <label> First Name : <input type="text" name="firstName" />
            </label>
        </div>
  		<div>
            <label> Last Name : <input type="text" name="lastName" />
            </label>
        </div>       
 		<div>
            <label> User Name : <input type="text" name="username" />
            </label>
        </div>
        <div>
            <label> Password: <input type="password" name="password" />
            </label>
        </div>
        <div>
            <input type="submit" value="Register" />
        </div>
    </form>

    </div>
    );
  }
}
 
export default Registration;