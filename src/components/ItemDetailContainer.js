import React, { useEffect, useState, useContext } from 'react'
import { ObtenerProducto } from '../services/mockService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { cartContext } from '../storage/cartContext'

function ItemDetailContainer() {
    const [producto,setProducto] = useState([]);
    const {addToCart}= useContext(cartContext);

    function handleAddToCart(count){
        //const agregoCount=[...{id,title,detail,imgurl},count];//ESTO ESTA BIEN?
        console.log(`se agregaron ${count} items al carrito...`);
        addToCart(count);
        }
    
    const parametro = useParams();

    useEffect( () => {
        ObtenerProducto(parametro.id)
        .then( (respuesta)=>{
            setProducto(respuesta);
        });
    },[parametro.id]);

    return (
    <ItemDetail onAddToCart={handleAddToCart} id={producto.id} title={producto.title} detail={producto.detail} imgurl={producto.imgurl}/>
    )
}

export default ItemDetailContainer