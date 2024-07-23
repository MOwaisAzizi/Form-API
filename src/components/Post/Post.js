import React from 'react'
import './Post.css'

const post = (props) => (
  <article className="post" onClick={props.click}>
   <h1>{props.title}</h1>
   <div> 
    <div className='author'>{props.author}</div>
   </div>
  </article>
)

export default post
