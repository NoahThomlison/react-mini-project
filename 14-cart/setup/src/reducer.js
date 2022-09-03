const reducer = (state, action) => {
  console.log(action.type)
  switch(action.type){
    case "CLEAR":
      return{...state, cart: [], amount: 0}
    case "INCREMENT":
      return{...state, amount: state.amount + 1}
    case "DECREMENT":
      return{...state, amount: state.amount - 1}
    case "REMOVE":
      return{...state, cart: state.cart.filter((item) => action.payload !== item.id)}
    default:
      return state
  }
}

export default reducer