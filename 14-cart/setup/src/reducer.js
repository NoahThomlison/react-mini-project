const reducer = (state, action) => {
  if (action.type = "CLEAR"){
    return{...state, cart: []}
  }
  if (action.type = "INCREMENT"){
    return{...state, cart: []}
  }
  return state
}

export default reducer