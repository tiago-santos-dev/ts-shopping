export enum ActionTypes {
    AddProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
    AddProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
    AddProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}
export interface IProduct {
    id: number;
    title: string;
    price: number;
}

export interface ICartItem {
    product: IProduct;
    quantity: number;
}

export interface ICartState {
    items: ICartItem[];
    failedStockCheck: number[];
}
