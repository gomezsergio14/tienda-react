import React, { useEffect, useState, useContext } from 'react'
import { ObtenerProducto } from '../services/firebase';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { cartContext } from '../storage/cartContext'

function ItemDetailContainer() {
    const [producto,setProducto] = useState([]);
    const [isInCart,setIsInCart] = useState(false);
    const {addToCart}= useContext(cartContext);

    function handleAddToCart(count){
        setIsInCart(true);
        //const agregoCount=[...{id,title,detail,imgurl},count];//ESTO ESTA BIEN?
        console.log(`se agregaron ${count} items al carrito...`);
        addToCart({...producto, count:count});//AQUI DEBERIAS PASAR EL TITLE O PRODUCTO?aqui pasabas count
        }
    
    const parametro = useParams();

    useEffect( () => {
        ObtenerProducto(parametro.id)
        .then( (respuesta)=>{
            setProducto(respuesta);
        });
    },[parametro.id]);

    return (
    <ItemDetail 
    isInCart={isInCart} 
    onAddToCart={handleAddToCart} 
    id={producto.id} 
    title={producto.title} 
    detail={producto.detail} 
    price={producto.price} 
    stock={producto.stock}
    imgurl={producto.imgurl}/>
    )
}

export default ItemDetailContainer