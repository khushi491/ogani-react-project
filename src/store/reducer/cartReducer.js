import { ADD_TO_CART } from "../actionLabel/actionLabel";

const initialState = {
  cartItems: localStorage.getItem("cartitems")
    ? JSON.parse(localStorage.getItem("cartitems"))
    : [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload.id;
      const existitem = state.cartItems.find((x) => x.id == item);
      if (existitem) {
        //    window.localStorage.setItem('cartitems' , JSON.stringify(state.cartItems))

        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id == item ? action.payload : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    default:
      return state;
  }
};
