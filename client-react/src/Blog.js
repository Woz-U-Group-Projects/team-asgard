import React, { Component } from "react";
import axios from 'axios';
 
/*class Users extends Component {
  render() {
    return (
      <div>
        <h2>Here are the Users in our Database</h2>
        <p>I will insert the data here.</p>
      </div>
    );
  }
}*/

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.name = React.createRef();
    this.content = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/blog";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ projects: response.data }));
  };

  addBlog = () => {
    let url = "http://localhost:8080/blog";
   
    const data = this.state.imagePreviewUrl.split(',')[1];
    var raw = window.atob(data);
    var rawlength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawlength));
   
    var imge = [];
    for(var i =0; i<rawlength; i++){
      array[i] = raw.charCodeAt(i);
      imge.push((array[i]));
    axios.post(url,{ name: this.name.current.value ,  content: this.content.current.value, }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.name.current.value = "";
      this.content.current.value = "";
      this.imge.current.value = "";
    });
  };
}

  _handleImageChange(e){
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = ()=>{
      this.setState({
        file :file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }


  render() {
    return (
      <div>

 <div class="container">
        <div class="row">
                    <div class="card">
                        <h2>Top Dog?</h2>
                        <h5>Labrador Retrievers have long held the top spot for most popular breed in the USA, </h5>
<h4>October, 2019</h4>
                        <img src={require('./img/lab1.png')} class="img-thumbnail" alt="labrador"></img>
                                <h4 class="section-heading">America's Favorite Breed.</h4>
                                <p>Did you know the Labrador Retriever is the most popular dog breed in the USA? Since 1991, labs have held the top position of most popular dog breed according the the American Kennel Club. Notoriously friendly, sociable and trainable, it's not hard to see why labs have been a family favorite for decades.</p>
                                <p>Not only great as a family companion, Labs also have a long history of being a work dog. You've probably seen labs assisting police or working as a rescue dog or a guide dog for the blind, but did you know they used to be employed as duck retrievers and a fisherman's mate? The traditional waterdog of Newfoundland and Labrador, Canada, as early as the 1800 this breed gained popularity as English nobles visiting Canada returned home with "Labrador dogs".</p>
                            <blockquote class="blockquote">“The ideal disposition is one of a kindly, outgoing, tractable nature; eager to please and nonagressive towards man or animal,” according to the breed standard. “The Labrador has much that appeals to people; his gentle ways, intelligence and adaptability make him an ideal dog.”</blockquote>
                                <p>Ever noticed that labs are excellent swimmers? The lab's "otter tail" works like a rudder, moving back and forth as the dog treads water, helping propel them forward and steering their turns. But despite being built for work, it's always their temperment that distinguishes the lab. Able to bond well with humans and other dogs, an eager to please nature, whether looking for a work companion or a new member of the family, it's clear why so many people turn to a Labrador. </p>
                            <h4 class="section-heading">“If a dog does not possess true breed temperament,” wrote a noted dog judge, “he is not a Labrador.” (American Kennel Club)</h4>
                                <p>Are you looking for the perfect dog? Maybe you're more of a chocolate lab lover, or it's the golden retriever. Whichever lab you love best, if you're looking for a new canine companion in your life, be sure to check out rescue opportunities at: https://thelabradorclub.com/breeders-rescue-groups/rescue-organizations/</p>
                                <p>For more information on labs check out the AKC: https://www.akc.org/dog-breeds/labrador-retriever/ </p>
                    </div>   
      </div>
      </div>

        <label id="blogName">
          Name:<input ref={this.name} placeholder="Enter username"/><br></br>
        </label>
     
         <textarea ref={this.content} id="blogTextbox" placeholder="Write your comment here"/><br></br> 
       
       
        <br></br>
        <button onClick={this.addBlog}>Submit</button>
        <label className="col-sm-2 cold-form-label"> add image </label>
        <div className="col-sm-10">
          <input type="file" className="form-control" onchange={(e)=>this._handleImageChange}/>
        </div>
     
     <br/>
        <h3>Previous Comments</h3>
      
        <ul>
          {this.state.projects.reverse().map(p => (
            <table>
          
              <tbody>
              <tr key={p.id}>
                <td>{p.name}</td>
                </tr>
              <tr>
                <td>{p.content} </td>
                </tr>
                <tr>
                  <br/>
              </tr>
              </tbody>
            </table>
          ))}
        </ul>
      </div>
    );
  }
}
 
export default Blog;