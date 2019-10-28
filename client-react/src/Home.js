import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to our site dog lovers!</h1>
           <h2 class="subheading">Animal lovers of all kinds welcome</h2>
        
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">   
                <p> Welcome to our blog all about dogs and all our other furry friends!</p> 
                <p> We are so glad you stopped by. We have user blog posts, an Articles page where you can find information on a variety of topics, a helpful Tips page and if you're curious, there's even a page where you can meet the fun team behind this site. So please take a look around and enjoy!.</p>
            </div>
        </div>
        </div>
        <div class="container">
        <div class="row">
                <div class="leftcolumn">
                    <div class="card">
                        <h2>New Blog Post</h2>
                        <h5>Title, description, date, 2019</h5>
                        <img src="./img/lab1.png" class="img-thumbnail" alt="labrador"></img>
                                <h4 class="section-heading">Eros ligula auctor mi.</h4>
                                <p>In commodo porttitor bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean finibus risus odio, commodo fringilla nunc ornare auctor. Sed convallis quis mi nec commodo. Nulla facilisi.</p>
                                <p>Cras lacinia facilisis turpis eget fringilla. Vestibulum imperdiet fringilla lorem ac aliquam. In auctor venenatis tempor. Ut ornare mattis libero. Proin tincidunt augue eget ligula placerat convallis.</p>
                            <blockquote class="blockquote">Proin eget viverra nulla. Mauris eu diam metus. Proin magna nunc, auctor id odio id, euismod ultrices mauris. Pellentesque sollicitudin condimentum lorem nec auctor. Maecenas vel velit et mi lacinia hendrerit ut quis sapien.</blockquote>
                                <p>Suspendisse maximus lorem neque, non pretium ex faucibus a. Sed venenatis ullamcorper nisi quis elementum. Cras nec quam eget ipsum pretium laoreet. Ut accumsan leo ac elementum condimentum.</p>
                            <h4 class="section-heading">Donec scelerisque facilisis fermentum.</h4>
                                <p>Nunc a facilisis mauris. Maecenas venenatis ullamcorper massa quis lobortis. Nullam nec justo sit amet dolor porttitor faucibus. Phasellus luctus id lectus ut semper. Duis libero tellus, gravida euismod arcu et, sollicitudin pellentesque dui.</p>

                    </div>   
                </div>
                
                <div class="rightcolumn">
                        <div class="card">
                        </div>
                </div>
      </div>
      </div>

<br/>

        <div class="card" id="BlogPost1">
                    <h2>Older Blog Post</h2>
                    <h5>Title, description, date, 2019</h5>
                    <img src="./img/husky1.png" class="img-thumbnail" alt="husky"></img>
                            <p>Nulla at velit in diam bibendum eleifend ac non erat. Nulla ut nibh ut nisi vestibulum eleifend. In hac habitasse platea dictumst. Donec eget orci sapien. Nunc a facilisis mauris. Maecenas venenatis ullamcorper massa quis lobortis. Nullam nec justo sit amet dolor porttitor faucibus.</p>
                        <h4 class="section-heading">Eros ligula auctor mi</h4>
                            <p>In commodo porttitor bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean finibus risus odio, commodo fringilla nunc ornare auctor. Sed convallis quis mi nec commodo. Nulla facilisi. Proin venenatis arcu ac mauris facilisis volutpat. .</p>
                            <p>Cras lacinia facilisis turpis eget fringilla. Vestibulum imperdiet fringilla lorem ac aliquam. In auctor venenatis tempor. Ut ornare mattis libero. Proin tincidunt augue eget ligula placerat convallis. Vivamus porta eu nunc sit amet consequat. .</p>
            </div>

<br/>


    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">  
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
        </div>

        <img src="./img/allDogs.png" id="bottomRow" alt="differentdogs"></img>
        

    <p>Placeholder text by <a href="http://lorumipsum.com/">Lorum Ipsum</a>. Photographs by <a href="https://stock.adobe.com">Adobe Stock</a>.</p>
        <p class="copyright text-muted">Team Asgard 2019</p>

    </footer>

</div>
 
    );
  }
}
 
export default Home;