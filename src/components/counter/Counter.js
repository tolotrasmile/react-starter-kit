import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../store/reducers/counter'

class Counter extends Component {
  render () {
    const { count, increment, decrement } = this.props
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => state.counter

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment(2)),
  decrement: () => dispatch(decrement(2))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
