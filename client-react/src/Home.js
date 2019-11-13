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
                                    <div class="col">    
                                        <img src={require('./img/lab1.png')} class="img-cover" alt="labrador"></img>  
                                    </div>
                                
                                    <div class="col">
                                        <h2>Top Dog?</h2>
                                        <br/>
                                        <h2> What's all the bark about?</h2> 
                                        <br/>
                                    </div>
                                </div>

                               
                               
                        <h5>Labrador Retrievers have long held the top spot for most popular breed in the USA, </h5>
                                <h5> Check out our most recent blog post...</h5>
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
                    <div class="col-6"> 
                        <Link to="./Tips">
                            <div class="card" id="half">
                                <h3>Tips</h3>
                                <p>Add your own or learn something new with helpful tips on our tips page.</p>
                            </div>
                        </Link>
                    </div>
                            
                    <div class="col-6"> 
                        <Link to="./Article">
                            <div class="card" id="half">
                                <h3>Articles</h3>
                                <p>Check out our articles page and get caught up on our favourite articles.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-8">
                        <h3>Have a look at our older posts!</h3>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-8">
                    
                        <div class="card" id="BlogPost2">
                            <h2>A Dire Trend</h2>
                            <h5>HBO's Game of Thrones may be responsible for the increase in huskies being left at shelters</h5>
                            <h4>October 2019</h4>                    
                                <img src={require('./img/husky1.png')} class="img-thumbnail" alt="husky"></img>
                                    <p>It's a trend that's happened before. A show or movie gains cultural fame and the popular pups that star become the hottest breed, only to have new owners discover they weren't prepared and the shelters begin to fill. It happened with 101 Dalmatians and Beverly Hills Chihuahua and now it's happening with Game of Thrones.</p>
                                 <blockquote class="blockquote">“Please, to all of Game of Thrones' many wonderful fans, we understand that due to the direwolves’ huge popularity, many folks are going out and buying huskies,” HBO's GOT star Dinklage says. “... Please, please, if you’re going to bring a dog into your family, make sure that you’re prepared for such a tremendous responsibility and remember to always, ALWAYS, adopt from a shelter.”</blockquote>
                                    <p>Game of Thrones features direwolves (based on a now extinct breed of North American wolf), that largely resemble huskies. Shelters and Animals Services agencies have noted a clear trend in the popularity of Direwolves and the increase in huskies being left at shelters, as much as a 5.3% increase in 2018 alone. So why are huskies now the most returned breed of dog? Many dog experts point to the level of care they require. Huskies are highly vocal, require vigorous exercise and constant grooming, and can be quite the little escape artists.</p>
                                    <p>Those who bought a dog on impulse due to a cultural trend are often not fully informed or ready to make a lifetime commitment. But that lack of foresight can have tragic consequences. Dogs waiting in shelters and waiting on adoption lose out on a future home when dogs are bought instead of adopted. Devastatingly, half of the more than 6 million animals left homeless every year are euthanized because there are no homes for them.</p>
                                    <p>For more information read: "PETA Says, 'For the Love of Peter Dinklage, Stop Buying Huskies.' https://www.peta.org/blog/game-of-thrones-abandoned-huskies/</p>
                        </div>
<br/>
<br/>
                        <div class="card" id="BlogPost3">
                            <h5>Another idea for an old posts</h5>
                            <h4>Earlier in 2019</h4>
                                <img src={require('./img/husky1.png')} class="img-thumbnail" alt="husky"></img>
                                    <p>It's a trend that's happened before. A show or movie gains cultural fame and the popular pups that star become the hottest breed, only to have new owners discover they weren't prepared and the shelters begin to fill. It happened with 101 Dalmatians and Beverly Hills Chihuahua and now it's happening with Game of Thrones.</p>
                                 <blockquote class="blockquote">“Please, to all of Game of Thrones' many wonderful fans, we understand that due to the direwolves’ huge popularity, many folks are going out and buying huskies,” HBO's GOT star Dinklage says. “... Please, please, if you’re going to bring a dog into your family, make sure that you’re prepared for such a tremendous responsibility and remember to always, ALWAYS, adopt from a shelter.”</blockquote>
                                    <p>Game of Thrones features direwolves (based on a now extinct breed of North American wolf), that largely resemble huskies. Shelters and Animals Services agencies have noted a clear trend in the popularity of Direwolves and the increase in huskies being left at shelters, as much as a 5.3% increase in 2018 alone. So why are huskies now the most returned breed of dog? Many dog experts point to the level of care they require. Huskies are highly vocal, require vigorous exercise and constant grooming, and can be quite the little escape artists.</p>
                                    <p>Those who bought a dog on impulse due to a cultural trend are often not fully informed or ready to make a lifetime commitment. But that lack of foresight can have tragic consequences. Dogs waiting in shelters and waiting on adoption lose out on a future home when dogs are bought instead of adopted. Devastatingly, half of the more than 6 million animals left homeless every year are euthanized because there are no homes for them.</p>
                                    <p>For more information read: "PETA Says, 'For the Love of Peter Dinklage, Stop Buying Huskies.' https://www.peta.org/blog/game-of-thrones-abandoned-huskies/</p>
                        </div>

                    </div>
                    
                    <br/>

                   
                    <div class="col-4">
                      
                        <Link to="./Team">
                            <div class="card" id="About">  
                                <h3>About</h3>
                                <p> check out our teams page to learn more about us.</p>
                             </div>
                        </Link>
                        
                        <div>
                            <div id="socialMedia">
                                <br/>
                            <div class="sButton">
                                <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                                </div>
                                <br/>
                                <br/>
                                <div class="sButton">
                                <a href="http://www.twitter.com/" class="fa fa-twitter"></a>
                            </div>
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
 
    );
  }
}
 
export default Home;