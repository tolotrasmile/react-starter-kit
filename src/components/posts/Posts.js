import React, { Component } from 'react'
import PostItem from './PostItem'
import { connect } from 'react-redux'

class Posts extends Component {

  constructor (props) {
    super(props)
    this.fetchPosts().then(posts =>  this.props.fetchPosts(posts))
  }

  async fetchPosts () {
   return await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
  }

  render () {
    const { items } = this.props
    return (
      <div>
        <h1>Posts List</h1>
        <div>
          {items.map((item, index) => <PostItem key={item.id} post={item} index={index}/>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state.posts
const mapDispatchToProps = dispatch => ({
  fetchPosts: (items) => dispatch({
    type: 'FETCH_POSTS',
    payload: items
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
