export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'

export const increment = (count) => ({ type: INCREMENT, payload: count })

export const decrement = (count) => ({ type: DECREMENT, payload: count })

const initialState = { count: 0 }

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload }
    case DECREMENT:
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}
