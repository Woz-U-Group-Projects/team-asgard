import React from "react";
 

class Contact extends React.Component {
  onSubmit = () => {    this.props.history.push('/')  }
  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
         <br/>
        <input placeholder="email" type="email" />
        <br/>
        <button onClick={this.onSubmit}>Submit</button>      </form>
    )
  }
}
 
export default Contact;


