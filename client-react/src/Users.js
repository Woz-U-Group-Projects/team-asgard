import React, { Component } from "react";
import axios from 'axios';

 
/*class Users extends Component {
  render() {
    return (
      <div>
        <h2>Here are the Users in our Database</h2>
        <p>I will insert the data here.</p>
      </div>
    );
  }
}*/

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.userName = React.createRef();
  }


  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/users";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ projects: response.data }));
  };

  addUser = () => {
    let url = "http://localhost:8080/users";
    axios.post(url,{  firstName: this.firstName.current.value ,  lastName: this.lastName.current.value ,  userName: this.userName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.firstName.current.value = "";
      this.lastName.current.value = "";
      this.userName.current.value = "";
    });
  };

  render() {
    return (
      <div id="userBody">
        <label>
          Enter First Name: 
        <input ref={this.firstName} /><br></br>
        </label>
        <label>
          Enter Last Name :  
         <input ref={this.lastName} /><br></br> 
        </label>
        <label>
          Enter User Name: 
          <input ref={this.userName} /> <br></br>
        </label>
        <br></br>
        <button onClick={this.addUser}>Add to Database</button>
        <h3>List of Users in Our Database</h3>
        <table border="1" cellPadding="2" cellSpacing="2" >
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>UserName</th>
            </tr>
            
          {this.state.projects.map(p => (
             
              <tr>
                <td>{p.id}</td>  
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{p.userName}</td>
              </tr>
              
            
          ))}
        </table>
      </div>
    );
  }
}
 
export default Users;