import { createContext, useState } from "react";

//creo un context
export const cartContext=createContext();

//inicializo el provider
function CartProvider(props){
    const [cart,setCart]=useState([]);

    function addToCart(item){
        let newCart=[...cart];
        newCart.push(item);
        setCart(newCart);
    }
    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider};