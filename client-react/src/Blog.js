import React, { Component } from "react";
import axios from 'axios';

class Blog extends Component {
  constructor(props) {
    super(props);
    
    this.state = { posts: [] };
    this.title = React.createRef();
    this.name = React.createRef();
    this.content = React.createRef();
    
    //const posts = [];
    //this.state = { projects: [] };
    //this._handleImageChange = this._handleImageChange.bind(this);

    //for (let i=0; i<5; i++) {
      //posts.push ({
       //posts
      //})
      //this.state = {posts};
    //}
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = "http://localhost:8080/blog";

    axios.get(url).then(response => this.setState({ posts: response.data }));
  };

  addBlog = () => {
    let url = "http://localhost:8080/blog";
   
    //const data = this.state.imagePreviewUrl.split(',')[1];
     //var raw = window.atob(data);
     //var rawlength = raw.length;
     //var array = new Uint8Array(new ArrayBuffer(rawlength));
   
     //var imge = [];
     //for(var i =0; i<rawlength; i++){
     //array[i] = raw.charCodeAt(i);
     //imge.push((array[i]));
    
     axios.post(url,{ name: this.name.current.value ,  title: this.title.current.value , content: this.content.current.value, }).then(response => {
      
      this.getData();
     
      this.name.current.value = "";
      this.title.current.value = "";
      this.content.current.value = "";
    
      //this.imge.current.value = "";
      //this._handleImageChange = this._handleImageChange.bind(this);
    });
  };

  //  _handleImageChange(e) {
  //    e.preventDefault();
  //    let reader = new FileReader();
  //    let file = e.target.files[0];
  //    reader.onloadend = ()=>{
  //      this.setState({
  //        file :file,
  //        imagePreviewUrl: reader.result
  //      });
  //    }
  //    reader.readAsDataURL(file)
  //  }
  

  render() {
    return (
      <div>

        <div class="container-fluid">
          <div class="row">
              <div class="card">
                <h2>Share your thoughts with the Dog Blog community:</h2> <br/>
                    <div>
                      <form>
                        <label id="blogName"> Name:<input ref={this.name} placeholder="Enter username"/><br></br></label>
                        <label id="blogTitle"> Title of your post:<input ref={this.title} placeholder="Name your blog post"/><br></br></label>
                        <div>
                          <textarea ref={this.content} id="blogTextbox1" placeholder="Write your blog post here" /><br></br> 
                        </div>
                        <br></br>
                        <button onClick={this.addBlog}>Submit</button>
                        <br/>
                                 {/* <label> add image </label>
                                <div className="col-sm-10">
                                  <input type="file" ref={this.image} className="form-control" onchange={(e)=>this._handleImageChange}/>
                                </div>   */}
                      </form>
                    </div>
              </div>  
          </div>
        </div>

        <div class="container-fluid">
           <div class="row">
                <ul>
                  {this.state.posts.reverse().map(p => (
                    <div class="card" id="oldPosts">
                      <table>
                        <tbody>
                          <tr>
                            <th>{p.title}<br/><br/></th><br/>
                          </tr>
                          <tr key={p.id}>
                            <td id="poster">author: {p.name}</td><br/>
                          </tr>
                          <tr>
                            <td><div class="postContainer">{p.content} </div> </td>
                          </tr>
                            {/* <tr>
                              <br/>
                              {p.image}
                            </tr> */}<br/>
                          <tr>
                            <td> posted: {p.date}</td>
                          </tr>
                        </tbody>
                    </table>
                  </div>
                  ))}
                </ul>
              </div>
            </div>
        
</div>

    );
  }
}
 
export default Blog;