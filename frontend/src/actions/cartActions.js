import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants"

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/products/${id}`)
  const { name, image, price, countInStock } = data
  dispatch({
    type: CART_ADD_ITEM,
    payload: { product: data._id, name, image, price, countInStock, qty },
  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
