import * as actionTypes from '../constants/ProductConstants';
import axios from 'axios';
import {ItemData} from '../../components/sidebar/ItemData';

export const getProducts = (number) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

        if(!number) {
            const { data } = await axios.get("/api/v1/items/page");
            dispatch({
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: data
            });
        } else {
            const { data } = await axios.post("/api/v1/items/page/post", {pageNumber : number});
            dispatch({
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: data
            });
            console.log(number);
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getProductDetails = (productId) => async (dispatch) => {

    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });
        // // const { data } = await axios.get(`/api/products/${id}`);
        // const { data } = await axios.post(
        //     "/api/v1/items/detail", {
        //         id : productId,
        //     }
        // )
        const data = ItemData[0][productId - 1];
        dispatch({
            type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCTS_DETAILS_RESET,
    })
}