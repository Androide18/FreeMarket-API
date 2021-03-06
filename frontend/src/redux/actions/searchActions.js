import axios from 'axios';
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FILTER_PRODUCTS } from '../types/types.js';


//ACTIONS

export const fetchProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_PRODUCT_REQUEST, payload: '' });
        const { data } = await axios.get('http://localhost:5000/search?q=' + product);
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data, query: product })
    } catch (error) {
        dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message })
    }
}


export const filter = (products, sortBy) => async (dispatch) => {

    //////////// LOWER PRICE //////////
    if (sortBy === 'lowerPrice') {
        products.sort(function (a, b) {
            return a.price - b.price
        })
    }
    //////////// HIGHER PRICE //////////
    else if (sortBy === 'higherPrice') {
        products.sort(function (a, b) {
            return b.price - a.price
        })
    }
    //////////// ASCENDING NAME //////////
    else if (sortBy === 'ascName') {
        products.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        })
    }
    //////////// DESCENDING NAME //////////
    else if (sortBy === 'descName') {
        products.sort(function (a, b) {
            if (b.title < a.title) { return -1; }
            if (b.title > a.title) { return 1; }
            return 0;
        })
    }
    //////////// USED //////////
    else if (sortBy === 'used') {
        var usedProducts = products.filter(item => {
            if (item.condition === 'used') {
                return true;
            } else {
                return false;
            }
        })
        products = usedProducts;
    }
    //////////// NEW //////////
    else if (sortBy === 'new') {
        var newProducts = products.filter(item => {
            if (item.condition === 'new') {
                return true;
            } else {
                return false;
            }
        })
        products = newProducts;

    }

    return dispatch({
        type: FILTER_PRODUCTS,
        payload: {
            condition: sortBy,
            products: products
        }
    })
}