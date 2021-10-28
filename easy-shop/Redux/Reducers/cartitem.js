// import the constant
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../constans';

const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            const index = state.findIndex(item => item.id === action.payload.id);
  return state.filter((_, i) => i !== index);
        case CLEAR_CART:
            return state = []
    }

    return state;
}

export default cartItems;