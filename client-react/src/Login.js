import React from "react";
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'
import ReactDOM from 'react-dom'
import SocialButton from './SocialButton'


const handleSocialLogin = (user) => {
  console.log(user)
}
 
const handleSocialLoginFailure = (err) => {
  console.error(err)
}



export default class Login extends React.Component {
  registerUser = ({ serialized, fields, form }) => {
    return fetch('https://backend.dev', {
      body: JSON.stringify(serialized)
    })
  }
  
 render() {
    return (

      <div>
        <h2>Login</h2>
        <p>

      
  <div>
    <SocialButton
      provider='facebook'
      appId='349214701830032'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Facebook
    </SocialButton>
  </div>



      <Form
        action={this.registerUser}
        onSubmitStart={this.props.onSubmitStart}>
        <Field.Group name="primaryInfo">
          <Input
            name="userEmail"
            type="email"
            label="E-mail Address"
            placeholder="Email Address"
            required />
        </Field.Group>

        <Input
          name="userPassword"
          type="password"
          label="Password"
          placeholder="Password"
          required />
       
        <Button primary>Login</Button>
      </Form>       

              <br/> <br/>
        </p>
        <ul>
         
        </ul>
      </div>

    );
  }
}

