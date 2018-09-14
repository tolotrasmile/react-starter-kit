import React, { Component } from 'react'
import PostItem from './PostItem'
import { connect } from 'react-redux'
import { fetchPosts } from "../../store/reducers/posts"

class Posts extends Component {

  async componentDidMount() {
    await this.fetchPosts()
  }

  async fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (response.ok) {
      const posts = await response.json()
      this.props.fetchPosts(posts)
    }
  }

  render() {
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

export default connect(mapStateToProps, { fetchPosts })(Posts)
