import React from 'react'
import axios from 'axios'
import './FullPost.css'

class FullPost extends React.Component {
  state={
    LoadedPost:null
  }
  componentDidUpdate(){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then((response)=>{
      this.setState({LoadedPost : response.data})
    })
  }
 deleteHandler=()=>{
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then((response)=>{
    console.log(response);
    
  })
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post</p>
    if(this.props.id){
      <p>please Wait</p>
    }
   if(this.state.LoadedPost){
      post = (
        <div className="full-post">
          <h2>{this.state.LoadedPost.title}</h2>
          <p>{this.state.LoadedPost.body}</p>
          <div>
            <button className="delete" onClick={this.deleteHandler}>
              Delete
            </button>
          </div>
        </div>
   
      )
    }
    return post
  }
}

export default FullPost
