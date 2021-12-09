export interface IProduct {
    id: number;
    title: string;
    price: number;
}


export interface ICartItem {
    products: IProduct[];
    quantity: number;
}

export interface ICartState {
    items: ICartItem[];
}
