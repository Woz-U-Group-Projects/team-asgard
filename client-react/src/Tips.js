import React, { Component } from "react";
 
class Tips extends Component {
  render() {
    return (
      <div class="contanier-1">
        <h2>Tips Page</h2>
        <p> Contact details or form field goes here.
        <a href="google.com">Here can be used for contact link</a>.
        </p>

        <div class="box-1">
          <h3><b>Utility Bag for all Dogs</b></h3>
          <h5>Backpack, <span>October , 2014</span></h5>
        </div>
        <div class="box-2">
          <h3><b>Utility Bag for all Dogs</b></h3>
          <h5>Backpack, <span>October , 2014</span></h5>
        </div>
        <div class="box-3">
          <form action="" method="">
          <label for="userTips">Got a Tip we missed? Add your own!</label><br></br>
          <textarea id="userTips" rows="5" cols="45">Enter your tip here!</textarea>
        </form>
        </div>
      </div>
    );
  }
}
 
export default Tips;