import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../store/actions/counter.action'

class Counter extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}

const states = state => state.counter

const dispatchs = dispatch => ({
  increment: () => dispatch(increment(1)),
  decrement: () => dispatch(decrement(1))
})

export default connect(states, dispatchs)(Counter)
