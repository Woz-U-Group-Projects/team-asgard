import React, { Component } from "react";

class Tips extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-8">
            <h1><b>Tips Page</b></h1>
            <h4>Welcome to our Tips page, everything from items to training our companion.</h4>
          </div>
          <div className="col-sm-4">
            <form action="" method="">
              <label for="userTips"><h2>Got a Tip we missed? Add your own!</h2></label>
              <textarea id="userTips" rows="5" cols="80" placeholder="Enter your tip here!"></textarea>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username"></input>
                <input type="text" class="form-control" placeholder="Password"></input>
                <button class="btn btn-success" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="">
            <h2><b>Our Item of the week!</b></h2>
            <img width="460" height="320" src="https://images-na.ssl-images-amazon.com/images/I/61qFOmXnYHL._AC_SL1000_.jpg"></img>
            <h3>The Hurtta Trail Pack</h3>
            <h6>This is the best all in one bag for dog walking.
              You don't even need to carry the bag,
              the harness can be equiped with bags that go on either side of the dog.
              So you can leave the lifting for your little companion.
              Enough room to store all your dog walking needs.
            </h6>
          </div>
          <div className="">
            <h3><b>Todays activity for your dog!</b></h3>
            <img width="640" height="320" src="https://www.wellnesspetfood.com/sites/default/files/styles/blog_feature/public/media/images/dog-park.jpg?itok=O8vkW9-R"></img>
            <h3>To the Park!</h3>
            <h6>Okay we get it, you just got home from work and definitely dont want to go back out.
              But who loves to greet you everyday once you get home, who loves meeting your friends when they come over.
              Your dog. They LOVE to socialize and interact with people and animals. The dog park is a great way for your pup
              to get some exercise and familiarize themselves with other dogs.
          </h6>
          </div>
        </div>

        <div className="videoTip">
          <h2><b>Video of the week!</b></h2>
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/zye3DqVNHu0"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

      </>
    );
  }
}
export default Tips;