export const productReducer = (state = { products:[] }, action)=>{
    switch(action.type){
        case 'ALL_PRODUCTS':
            return {
                products: action.payload
            }
        case 'ADD_PRODUCT':
            return {
                products: action.payload
            }
        case 'SINGLE_PRODUCT':
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}