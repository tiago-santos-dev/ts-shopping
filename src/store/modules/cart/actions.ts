import { IProduct } from './types';

export function AddProductToCartRequest (product: IProduct) {
    return {
        type: 'ADD_PRODUCT_TO_CART_REQUEST',
        payload: {
            product,
        }
    }
}

export function AddProductToCartSuccess (product: IProduct) {
    return {
        type: 'ADD_PRODUCT_TO_CART_SUCCESS',
        payload: {
            product,
        }
    }
}

export function AddProductToCartFailure (productId: IProduct) {
    return {
        type: 'ADD_PRODUCT_TO_CART_FAILURE',
        payload: {
            productId,
        }
    }
}