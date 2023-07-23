const appReducer = (state, action) => {
  switch(action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'REMOVE_LOADING':
      return {
        ...state,
        loading: false
      }
    case 'TOGGLE_MODE':
      return {
        ...state,
        darkMode: action.payload
      }
  }
}

export default appReducer