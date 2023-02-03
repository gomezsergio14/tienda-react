import React, { useContext } from 'react'
import { cartContext } from '../storage/cartContext';

function CartContainer() {
    const {cart, removeItem, getTotalPriceInCart} = useContext(cartContext);
    return (
        <div>
        {
            cart.map(itemInCart=>(
                <div>
                    <h2>{itemInCart.id}</h2>
                    <h2>{itemInCart.title}</h2>
                    <h2>{itemInCart.detail}</h2>
                    <h2>{itemInCart.count}</h2>
                    <button onClick={()=>removeItem(itemInCart)} className="btn btn-danger">X</button>
                </div>
            ))
        }
        <p>El total de tu compra es: ${getTotalPriceInCart()}</p>
        </div>
    )
}

export default CartContainer