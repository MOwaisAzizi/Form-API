import React from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

class Blog extends React.Component {
state={
  posts:[],
  selectedPosts:null,
  error:false
}

componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    //  this.setState({posts:response.data})//all posts
    
    const posts = response.data.slice(0,4)
    const updatedposts = posts.map((item)=>{
    return{
       ...item,
      author :'Masoud',
    }
    })
    this.setState({posts:updatedposts})
   })
   .catch(err=>{
    this.setState({error:true})
    console.log(err);
   })
}

showpost(id){
this.setState({selectedPosts:id})
}

  render(){
     let posts = <p>failed to load some error acured</p>
     if(!this.state.error){
    posts = this.state.posts.map((item)=>{
      return <Post title={item.title} author={item.author} key={item.id} click={()=>this.showpost(item.id)}/>
    })
  }
    return(
         <div>
     <section className='posts'>
     {posts}
     </section>
     <section>
     <FullPost id={this.state.selectedPosts}/>  
     </section>
     <section>
     <NewPost/>
     </section>
         </div>
      )
  }
  }


export default Blog
