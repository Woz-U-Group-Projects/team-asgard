import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to our site dog lovers!</h2>
           <h3 class="subheading">Animal lovers of all kinds welcome</h3>
        
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">   
                <p> Welcome to our blog all about dogs and all our other furry friends!</p> 
                <p> We are so glad you stopped by. We have user blog posts, an Articles page where you can find information on a variety of topics, a helpful Tips page and if you're curious, there's even a page where you can meet the fun team behind this site. So please take a look around and enjoy!</p>
            </div>
        </div>
        </div>
       
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">  
                      <p class="bottomQuote">“A dog is the only thing on earth that loves you more than he loves himself.”</p>
                </div>
            </div>
        </div>

        
    <p>Photographs by <a href="https://stock.adobe.com">Adobe Stock</a>.</p>
        <p class="copyright text-muted">Team Asgard 2019</p>

        
    </footer>
    <img src={require('./img/allDogs.png')} id="bottomRow" alt="differentdogs"></img>
        
</div>
 
    );
  }
}
 
export default Home;