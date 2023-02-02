import { createContext, useState } from "react";

//creo un context
export const cartContext=createContext();

//inicializo el provider
function CartProvider(props){
    const [cart,setCart]=useState([]);

    function addToCart(item){
        let isInCart = cart.findIndex( itemInCart => itemInCart.id === item.id );
        let newCart = cart.map((item)=>item);
        
        
        if(isInCart !== -1){
            for(let i=0 ; i < cart.length ; i++){
                if(cart[i].id===item.id){
                    cart[i].count+=item.count;
                }
            }
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
        console.log("total de items");
    }

    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider};