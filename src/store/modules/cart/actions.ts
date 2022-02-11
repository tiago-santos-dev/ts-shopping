import { ActionTypes, IProduct } from './types';

export function AddProductToCartRequest (product: IProduct) {
    return {
        type: ActionTypes.AddProductToCartRequest,
        payload: {
            product,
        }
    }
}

export function AddProductToCartSuccess (product: IProduct) {
    return {
        type: ActionTypes.AddProductToCartSuccess,
        payload: {
            product,
        }
    }
}

export function AddProductToCartFailure (productId: number) {
    return {
        type: ActionTypes.AddProductToCartFailure,
        payload: {
            productId,
        }
    }
}