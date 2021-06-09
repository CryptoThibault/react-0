const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step }
    case 'DECREMENT':
      return { ...state, count: state.count - state.step }
    case 'SET_STEP':
      return { ...state, step: action.step }
    case 'RESET':
      return { ...state, count: 0 }
    default:
      throw new Error(`Unhandled action ${action.type} in counterReducer`)
  }
}
export default counterReducer;