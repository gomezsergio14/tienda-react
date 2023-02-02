import { createContext, useState } from "react";

//creo un context
export const cartContext=createContext();

//inicializo el provider
function CartProvider(props){
    const [cart,setCart]=useState([]);

    function addToCart(item){
        let isInCart = cart.findIndex( itemInCart => itemInCart.id === item.id );
        let newCart = cart.map((item)=>item);
        let quantity = item.count;
        
        
        if(isInCart !== -1){
            //cart[isInCart].count+=quantity;
            newCart[isInCart].count+=quantity;
            setCart(newCart);
        }
        else {
            newCart.push(item);
            setCart(newCart);
            //setCart([...cart,item]);    
        }
        
    }

    function removeItem(itemId){
        console.log("remover item");
    }

    function clear(){
        setCart([]);
    }

    function getTotalItemsInCart(){
        let total=0;
        
        if(cart){
            cart.map((e)=>{
                let monto=e.count
                return total+=monto
            })}
        console.log("total de items: "+total);
        return total;
    }

    function getTotalPriceInCart(){
        return 100;
    }

    return (
        <cartContext.Provider value={{cart, addToCart, getTotalItemsInCart, clear, removeItem, getTotalPriceInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider};