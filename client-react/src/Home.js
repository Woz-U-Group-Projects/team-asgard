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
        <div class="container">
        <div class="row">
                <div class="leftcolumn">
                    <div class="card">
                        <h2>Top Dog?</h2>
                        <h5>Labrador Retrievers have long held the top spot for most popular breed in the USA, October, 2019</h5>
                        <img src={require('./img/lab1.png')} class="img-thumbnail" alt="labrador"></img>
                                <h4 class="section-heading">America's Favorite Breed.</h4>
                                <p>Did you know the Labrador Retriever is the most popular dog breed in the USA? Since 1991, labs have held the top position of most popular dog breed according the the American Kennel Club. Notoriously friendly, sociable and trainable, it's not hard to see why labs have been a family favorite for decades.</p>
                                <p>Not only great as a family companion, Labs also have a long history of being a work dog. You've probably seen labs assisting police or working as a rescue dog or a guide dog for the blind, but did you know they used to be employed as duck retrievers and a fisherman's mate? The traditional waterdog of Newfoundland and Labrador, Canada, as early as the 1800 this breed gained popularity as English nobles visiting Canada returned home with "Labrador dogs".</p>
                            <blockquote class="blockquote">“The ideal disposition is one of a kindly, outgoing, tractable nature; eager to please and nonagressive towards man or animal,” according to the breed standard. “The Labrador has much that appeals to people; his gentle ways, intelligence and adaptability make him an ideal dog.”</blockquote>
                                <p>Ever noticed that labs are excellent swimmers? The lab's "otter tail" works like a rudder, moving back and forth as the dog treads water, helping propel them forward and steering their turns. But despite being built for work, it's always their temperment that distinguishes the lab. Able to bond well with humans and other dogs, an eager to please nature, whether looking for a work companion or a new member of the family, it's clear why so many people turn to a Labrador. </p>
                            <h4 class="section-heading">“If a dog does not possess true breed temperament,” wrote a noted dog judge, “he is not a Labrador.” (American Kennel Club)</h4>
                                <p>Are you looking for the perfect dog? Maybe you're more of a chocolate lab lover, or it's the golden retriever. Whichever lab you love best, if you're looking for a new canine companion in your life, be sure to check out rescue opportunities at: https://thelabradorclub.com/breeders-rescue-groups/rescue-organizations/</p>
                                <p>For more information on labs check out the AKC: https://www.akc.org/dog-breeds/labrador-retriever/ </p>
                    </div>   
                </div>
                
             
      </div>
      </div>

<br/>

        <div class="card" id="BlogPost1">
                    <h2>A Dire Trend</h2>
                    <h5>HBO's Game of Thrones may be responsible for the increase in huskies being left at shelters, October, 2019</h5>
                    <img src={require('./img/husky1.png')} class="img-thumbnail" alt="husky"></img>
                            <p>It's a trend that's happened before. A show or movie gains cultural fame and the popular pups that star become the hottest breed, only to have new owners discover they weren't prepared and the shelters begin to fill. It happened with 101 Dalmatians and Beverly Hills Chihuahua and now it's happening with Game of Thrones.</p>
                         <blockquote class="blockquote">“Please, to all of Game of Thrones' many wonderful fans, we understand that due to the direwolves’ huge popularity, many folks are going out and buying huskies,” HBO's GOT star Dinklage says. “... Please, please, if you’re going to bring a dog into your family, make sure that you’re prepared for such a tremendous responsibility and remember to always, ALWAYS, adopt from a shelter.”</blockquote>
                            <p>Game of Thrones features direwolves (based on a now extinct breed of North American wolf), that largely resemble huskies. Shelters and Animals Services agencies have noted a clear trend in the popularity of Direwolves and the increase in huskies being left at shelters, as much as a 5.3% increase in 2018 alone. So why are huskies now the most returned breed of dog? Many dog experts point to the level of care they require. Huskies are highly vocal, require vigorous exercise and constant grooming, and can be quite the little escape artists.</p>
                            <p>Those who bought a dog on impulse due to a cultural trend are often not fully informed or ready to make a lifetime commitment. But that lack of foresight can have tragic consequences. Dogs waiting in shelters and waiting on adoption lose out on a future home when dogs are bought instead of adopted. Devastatingly, half of the more than 6 million animals left homeless every year are euthanized because there are no homes for them.</p>
                            <p>For more information read: "PETA Says, 'For the Love of Peter Dinklage, Stop Buying Huskies.' https://www.peta.org/blog/game-of-thrones-abandoned-huskies/</p>
            </div>

<br/>


    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">  
                      <p class="bottomQuote">“A dog is the only thing on earth that loves you more than he loves himself.”</p>
                </div>
            </div>
        </div>

        <img src={require('./img/allDogs.png')} id="bottomRow" alt="differentdogs"></img>
        

    <p>Photographs by <a href="https://stock.adobe.com">Adobe Stock</a>.</p>
        <p class="copyright text-muted">Team Asgard 2019</p>

    </footer>

</div>
 
    );
  }
}
 
export default Home;