export const FETCH_POSTS = 'FETCH_POSTS'

export const fetchPosts = (posts) => ({ type: FETCH_POSTS, payload: posts })

const initialState = { items: [] }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, items: action.payload }
    default:
      return state
  }
}
