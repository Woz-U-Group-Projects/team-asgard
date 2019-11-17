import React  from "react";
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'


export default class Register extends React.Component {
  registerUser = ({ serialized, fields, form }) => {
    return fetch('https://backend.dev', {
      body: JSON.stringify(serialized)
    })
  }
  
  render() {
    return (

      <div>
        <h2>Register</h2>
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
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Confirm Password"
          required
          skip />

        <Field.Group name="primaryInfo">
          <Input
            name="firstName"
            label="First name"
            placeholder="First Name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'lastName', 'value'])
            }} />
          <Input
            name="lastName"
            label="Last name"
            placeholder="Last Name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'firstName', 'value'])
            }} />
        </Field.Group>

        <Button primary>Register</Button>
      </Form>       

              <br/> <br/>
        </p>
        <ul>
         
        </ul>
      </div>

    );
  }
}

