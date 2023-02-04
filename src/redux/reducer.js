const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch( action.type ){
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.product]
      };
    case "REMOVE_PRODUCT": 
      state.cart.splice(state.cart.findIndex(item => { return item.id === action.data }), 1);
      return {
        cart: [...state.cart]
      };
    default:
      return state;
  }
}

export { cartReducer };