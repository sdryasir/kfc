export const productReducer = (state = { products:[] }, action)=>{
    switch(action.type){
        case 'ALL_PRODUCTS':
            return {
                products: action.payload
            }
        case 'ADD_PRODUCTS':
            return {
                ...state.products,
                message: action.payload
            }
        default:
            return state
    }
}