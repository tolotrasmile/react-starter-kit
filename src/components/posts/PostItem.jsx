import React from 'react'

 const PostItem = ({ post, index }) => (
  <div>
    <h2>{index} : {post.title}</h2>
    <p>{post.body}</p>
  </div>
)

export default PostItem
