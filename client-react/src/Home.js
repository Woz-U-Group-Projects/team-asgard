import React, { Component } from "react";
import {  Link } from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
      <div>
           <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-10 mx-auto"> 
                        <div class ="card1">
                            <h2>Welcome to our site dog lovers!</h2>
                            <br/>
                                <h5 class="subheading">Animal lovers of all kinds welcome</h5>  
                                    <p> Thanks for visiting our blog all about dogs and all our other furry friends! We are so glad you stopped by. We have user blog posts, an Articles page where you can find information on a variety of topics, a helpful Tips page and if you're curious, there's even a page where you can meet the fun team behind this site. So please take a look around and enjoy!</p>
                        </div>
                    </div>
                </div>
            </div>
       
            <br/>
                
            <div class="container-fluid">
                <div class="row">
                    <div class="col"> 
                        <Link to="./Blog">
                            <div class ="card" id="titleCard">
                                <br/>
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">    
                                        <img src={require('./img/lab1.png')} class="img-cover" alt="labrador"></img>  
                                    </div>
                                
                                    <div class="col-sm-12 col-md-6">
                                        <h2>The Blog</h2>
                                        <br/>
                                        <h2> What's all the bark about?</h2> 
                                        <br/>
                                        <h5>Check out our blog page for latest. You can even add your own! </h5>
                                    </div>
                                </div>

                               <br/>
                                <h5> Check out our most recent blog posts...</h5>
                                <br/>
                                <br/>
                              </div>
                        </Link>
                    </div>
                </div>
            </div>
        
            <br/>
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6"> 
                        <Link to="./Tips">
                            <div class="card" id="half">
                                <h3>Tips</h3>
                                <p>Add your own or learn something new with helpful tips page.</p>
                            </div>
                        </Link>
                    </div>
                            
                    <div class="col-sm-6"> 
                        <Link to="./Article">
                            <div class="card" id="half">
                                <h3>Articles</h3>
                                <p>Check out our articles page and get caught up on our favorites.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div class="centertext">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <h3>Have a look around, we are constantly expanding our site to serve dog lovers everywhere!</h3>
                        </div>
                     </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                <div class="col-2"></div>
                <div className="col-8">
                        <Link to="./Team">
                            <div class="card" id="About">  
                                <h3>About</h3>
                                <p> check out our teams page to learn more about us.</p>
                             </div>
                        </Link>
                    <div>
                    
                    </div>
                    </div>
                    </div>
                   
            <div class="container">
                <div class="row">
                    <div class="col">
                            <div id="socialMedia">
                                <div class="sButton">
                                    <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                                    <a href="http://www.twitter.com/" class="fa fa-twitter"></a>

                                </div>
                            </div>
                    </div>
                </div>
            </div>


            <footer>
                <div class="container-fluid">
                    <div class="row" id="quote">
                        <div class="col-lg-8 col-md-10 mx-auto"> 
                        <br/> 
                            <p class="bottomQuote">“A dog is the only thing on earth that loves you more than he loves himself.”</p>
                        </div>
                    </div>
                </div>
                
                <div class="container-fluid">
                    <div class="row">
                        <p>Photographs by <a href="https://stock.adobe.com">Adobe Stock</a>.</p>
                            <p class="copyright text-muted">Team Asgard 2019</p>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row" >
                        <img src={require('./img/allDogs.png')} id="bottomRow" alt="differentdogs"></img>
                    </div>
                </div>

            </footer>
            </div>
        </div>
    );
  }
}
 
export default Home;