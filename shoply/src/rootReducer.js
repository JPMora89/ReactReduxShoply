import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from "./actionTypes";
import { calculateCartTotal} from "./actions";
import data from "./data.json";

const discounts = {
    REMOVE10: 0.1,
    REMOVE20: 0.2,
    REMOVE30: 0.3,
};




const INITIAL_STATE = {
    products: data.products,
    cart: {},
    cartValue: 0,
    discountApplied: false,
    discountAmount: 0,
};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const { id } = action;
            let newCart = { ...state.cart };
            newCart[id] = (newCart[id] || 0) + 1;
            return {
                ...state,
                cart: newCart,
                cartValue: calculateCartTotal(
                    state.products,
                    newCart,
                    state.discountAmount
                ),
            };
        }
        case REMOVE_FROM_CART: {
            const { id } = action;
            let newCart = { ...state.cart };
            if (newCart[id] === 1) {
                delete newCart[id];
            } else {
                newCart[id]--;
            }
            return {
                ...state,
                cart: newCart,
                cartValue: calculateCartTotal(
                    state.products,
                    newCart,
                    state.discountAmount
                ),
            };
        }
        case APPLY_DISCOUNT: {
            const { code } = action;
            let discountAmount = discounts[code] || 0;
            return {
                ...state,
                discountApplied: true,
                discountAmount,
                cartValue: calculateCartTotal(
                    state.products,
                    state.cart,
                    discountAmount
                ),
            };
        }
        default:
            return state;
    }
}

export default rootReducer;
