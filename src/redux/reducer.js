const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_TO_CART" :
      return {
        cart: [...state.cart, action.product]
      }
    default:
      return state
  }
}

export { cartReducer }