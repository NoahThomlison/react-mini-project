const reducer = (state, action) => {
  console.log(state, action.type, action.payload)
  switch(action.type){
    case "CLEAR":
      return{...state, cart: [], amount: 0}
    case "INCREMENT":
      let tempCartIncrease = state.cart.map((item) => {
        if(action.payload === item.id){
          return{...item, amount: item.amount + 1}
        }
        return(item)
      })
      return{...state, cart: tempCartIncrease}
    case "DECREMENT":
      let tempCartDecrease = state.cart.map((item) => {
        if(action.payload === item.id){
          return{...item, amount: item.amount - 1}
        }
        return(item)
      }).filter((item) => item.amount >= 0)
      return{...state, cart: tempCartDecrease}    
      case "REMOVE":
      return{...state, cart: state.cart.filter((item) => action.payload !== item.id)}
    default:
      return state
  }
}

export default reducer