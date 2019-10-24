import React from "react";
import axios from "axios";
import Main from "./src/components/Main";
import Project from "./src/components/Project";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.taskName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ projects: response.data }));
  };

  addTask = () => {
    let url = "http://localhost:8080/tasks";
    axios.post(url, { name: this.taskName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.taskName.current.value = "";
    });
  };

  
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/Main" component={Main} />
      </Switch>
    </Router>
    );
  }
}

export default Project;
