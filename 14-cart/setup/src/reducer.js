const reducer = (state, action) => {
  console.log(action.type)
  switch(action.type){
    case "CLEAR":
      return{...state, cart: [], amount: 0}
    case "INCREMENT":
      return{...state, amount: state.amount + 1}
    case "DECREMENT":
      return{...state, amount: state.amount - 1}
    default:
      return state
  }
}

export default reducer