import * as actionTypes from '../constants/ProductConstants';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_PRODUCTS_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCTS_DETAILS_RESET:
            return {
                products: {},
            }
        default:
            return state;
    }
}