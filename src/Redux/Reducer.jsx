export const ADD_TO_CART = 'ADD_TO_CART'
export const INCREAMENT='INCREAMENT'
export const DECREAMENT='DECREAMENT'
const intitalState = {
    cart: [],
    quantity:1,
    totaprice:1
}

const cartReducer = (state = intitalState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productcheck = state.cart.find((items) => items.id === action.payload.id)
            if (productcheck) {
                return state
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }

        case DECREAMENT:
            const productqtycheck= state.cart.map((item)=>item.id===action.payload)
            if(productqtycheck){
                return{
                    ...state,
                    quantity:quantity+1

                }
            }
            else{
                return state
            }
        default:
            return state
    }
}
export default cartReducer