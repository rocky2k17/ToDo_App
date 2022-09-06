import { ADD_TO_CART,REMOVE_TO_CART } from "./constant"

export const cartData = (data = [], action) => {

    //     if(action.type ==="ADD_TO_CART")
    //     {
    //         console.warn("reducer called",action)
    //         return action.data
    //     }
    //    else{
    //     return "no action matched"
    //    }

    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART CONDITION", action)
            return [action.data, ...data];
        case REMOVE_TO_CART:
            console.warn("REMOVE_TO_CART CONDITION", action)
            return [action.data, ];
        default:
            return data;
    }
}