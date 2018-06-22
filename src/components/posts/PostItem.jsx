import React from 'react'

const style = (index) => ({
  backgroundColor: index %2 === 0 ? '#eee' : '#ddd',
  borderRadius: '1em',
  margin: '1em',
  padding: '1em'
})

export default ({ post, index }) => (
  <div style={style(index)}>
    <h2>{index} : {post.title}</h2>
    <p>{post.body}</p>
  </div>
)
