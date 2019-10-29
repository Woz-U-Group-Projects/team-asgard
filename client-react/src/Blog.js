import React, { Component } from "react";
 
class Blog extends Component {
  render() {
    return (
        <div>
            <h2>BLOG Page</h2>
        
            <div id="result"> </div>
            
            <h3>Make a blog entry:</h3>
            <input type="text" id="onlineEntry" class="blogtext" value=""></input>
            <br/>
            <button>Post</button>
        </div>
     
    );
  }
}
 
export default Blog;