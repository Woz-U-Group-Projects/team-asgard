import React, { Component } from "react";
import axios from 'axios';

class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.userName = React.createRef();
    this.tipsSubmission = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/tips";
    axios.get(url).then(response => this.setState({ projects: response.data }));
  };

  addTip = () => {
    let url = "http://localhost:8080/tips";
    axios.post(url, { userName: this.userName.current.value, tipsSubmission: this.tipsSubmission.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.userName.current.value = "";
      this.tipsSubmission.current.value = "";
    });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1><b>Tips Page</b></h1>
          <h4>Welcome to our Tips page, everything from items to training your companion.</h4>
        </div>

        <div className="row mb-2">

          {/* Item of week */}

          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative">
              <div className="col p-4 d-flex-column position-static">
                <h2>Our Item of the week!</h2>
                <h3>The Hurtta Trail Pack</h3>
                <img className="img-fluid" alt="DogPack" src="https://images-na.ssl-images-amazon.com/images/I/61qFOmXnYHL._AC_SL1000_.jpg"></img>
                <p>This is the best all in one bag for dog walking. You don't even need to carry the bag,
                  the harness can be equiped with bags that go on either side of the dog.
                  So you can leave the lifting for your little companion. Enough room to store all your dog walking needs.
                </p>
              </div>
            </div>

            {/* Tip Form */}

            <div className="card ">
              <div className="card-header">
                <h4 className="card-header-title text-center py-1">
                  Got a Tip we missed? Submit it below!
                </h4>
              </div>
              <label for="materialTipFormUsername">
                <input
                  type="text"
                  id="materialTipFormUsername"
                  className="form-control"
                  ref={this.userName}
                  placeholder="Username" />
              </label>
              <label for="materialTipFormUsername">
                <textarea
                  id="materialTipFormUsername"
                  className="form-control md-textarea"
                  rows="3"
                  ref={this.tipsSubmission}
                  placeholder="Enter your tip here!">
                </textarea>
              </label>
              <button className="btn btn-primary btn-rounded btn-block z-depth-0 my-4 waves-effect" onClick={this.addTip}>Add Tip</button>

            </div>

          </div>

          <div className="col-md-6">

            {/* Activity for dog */}

            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative">
              <div className="col p-4 d-flex-column position-static">
                <h3><b>Todays activity for your dog!</b></h3>
                <h3>To the Park!</h3>
                <img className="img-fluid" alt="DogsPark" src="https://www.wellnesspetfood.com/sites/default/files/styles/blog_feature/public/media/images/dog-park.jpg?itok=O8vkW9-R"></img>
                <p>Okay we get it, you just got home from work and definitely dont want to go back out.
                  But who loves to greet you everyday once you get home, who loves meeting your friends when they come over.
                  Your dog. They LOVE to socialize and interact with people and animals. The dog park is a great way for your pup
                  to get some exercise and familiarize themselves with other dogs.
              </p>
              </div>
            </div>
            <h2><b>Video of the week!</b></h2>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/zye3DqVNHu0"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <div className="row">

          {/* Tip List */}

          <div className="col">
            <h4 id="label" className="card-header text-center">Tips from people like you!</h4>
            <ul>
              {this.state.projects.reverse().map(p => (
                <div className="card align-center">
                  <table>
                    <tr key={p.id}>
                      <div className="col-12">
                        <div className="card-header white">
                          <td>{p.userName} </td>
                          <td className="text-muted text-right">Submitted: {p.date}</td>
                        </div>
                        <div className="card-body">
                          <td>{p.tipsSubmission} </td>
                        </div>
                        <div >
                        </div>
                      </div>
                    </tr>
                  </table>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tips;