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

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.name = React.createRef();
    this.content = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/blog";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ projects: response.data }));
  };

  addBlog = () => {
    let url = "http://localhost:8080/blog";
    axios.post(url,{ name: this.name.current.value ,  content: this.content.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.name.current.value = "";
      this.content.current.value = "";
    });
  };

  render() {
    return (
      <div>
        <label id="blogName">
          Name:<input ref={this.name} placeholder="Enter username"/><br></br>
        </label>
     
         <input ref={this.content} id="blogTextbox" placeholder="Write your blog entry here"/><br></br> 
       
       
        <br></br>
        <button onClick={this.addBlog}>Submit</button>
        <h3>Previous Posts</h3>
      
        <ul>
          {this.state.projects.reverse().map(p => (
            <table>
          
              <tbody>
              <tr key={p.id}>
                <td>{p.name}</td>
                </tr>
              <tr>
                <td>{p.content} </td>
                </tr>
                <tr>
                  <br/>
              </tr>
              </tbody>
            </table>
          ))}
        </ul>
      </div>
    );
  }
}
 
export default Blog;