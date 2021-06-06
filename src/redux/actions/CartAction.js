import * as actionTypes from '../constants/CartConstants';
import axios from 'axios';
import {ItemData} from '../../components/sidebar/ItemData';

export const addToCart = (productId, qty,) => async (dispatch, getState) => {
    // const { data } = await axios.get(`/api/products/${id}`);
    try {
        const data = ItemData[0][productId - 1];
        // const { data } = await axios.post(
        //    "/api/v1/items/cart", {
        //        id : productId,
        //    }
        // );

        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: {
                product: data._id,
                name: data.name,
                imageUrl: data.imageUrl,
                price: data.price,
                stockQuantity: data.count,
                qty
            }
        })
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
    } catch(err) {
        console.log(err);
    }
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}