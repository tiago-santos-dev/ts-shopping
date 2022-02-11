import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../../store';
import { AddProductToCartRequest } from '../../../store/modules/cart/actions';
import { IProduct } from '../../../store/modules/cart/types'

interface ICatalogItem {
    product: IProduct
}

const CatalogItem: React.FC<ICatalogItem> = ({
    product
}) => {

    const dispatch = useDispatch();

    const handleAddProductToCart = useCallback(() => {
        dispatch(AddProductToCartRequest(product))
    }, [dispatch, product])

    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id);
    })

    return (
        <article>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {" "}

            <button
                type='button'
                onClick={handleAddProductToCart}
            >
                Comprar
            </button>
            {hasFailedStockCheck && <span style={{ color: 'red' }}> Sem Estoque</span>}
        </article>
    )
}

export default CatalogItem
