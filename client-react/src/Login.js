import React from "react";
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'


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
