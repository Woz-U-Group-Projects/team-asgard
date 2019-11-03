import React, { Component } from "react";

class Tips extends Component {
  render() {
    return (
      <div id="contanier-1">
        <div className="title">
          <h2>Tips Page</h2>
        </div>
          <p> Contact details or form field goes here.
          <a href="google.com">Here can be used for contact link</a>.
          </p>
          <div className="tip1">
            <h3>The Hurtta Trail Pack</h3>
            <h4>This is the best all in one bag for dog walking.<br></br> 
              You don't even need to carry the bag, <br></br> 
              the harness can be equiped with bags that go on either side of the dog. <br></br> 
              So you can leave the lifting for your little companion. <br></br> 
              Enough room to store all your dog walking needs.<br></br> 
            </h4>
          </div>
          <div className="tip2">
            <h3><b>Utility Bag for all Dogs</b></h3>
            <h5>Backpack, <span>October , 2014</span></h5>
          </div>
          <div className="userTips">
            <form action="" method="">
            <label for="userTips">Got a Tip we missed? Add your own!</label><br></br>
            <textarea id="userTips" rows="5" cols="45">Enter your tip here!</textarea>
            </form>
          </div>
          <div className="videoTip">
            <h2 align="center">Awesome Life Hacks for having a dog</h2>
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/zye3DqVNHu0" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
          </div>
      </div>
    );
  }
}
 
export default Tips;