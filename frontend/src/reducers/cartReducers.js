import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(
        (itemCart) => itemCart.product === item.product
      )
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((it) =>
            it.product === existItem.product ? item : it
          ),
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (it) => it.product !== action.payload
        ),
      }

    default:
      return state
  }
}
