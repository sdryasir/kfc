import axios from 'axios';

export const getAllProducts = () => async (dispatch) => {
    const response = await axios.get(`http://localhost:9000/api/v1/products`);
    dispatch({
        type:'ALL_PRODUCTS',
        payload: response.data
    })
}

export const addNewProduct = (product) => async (dispatch) => {
    const response = await axios.post(`http://localhost:9000/api/v1/product/new`, product);
    dispatch({
        type:'ADD_PRODUCTS',
        payload: response.data
    })
}

