import React, { useEffect, useState } from 'react';
import { ObtenerProducto } from '../services/mockService';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
 const[product, setProduct]=useState([]);
 useEffect(()=>{
    ObtenerProducto()
    .then((respuesta)=>{
        setProduct(respuesta);
    })
    .catch((error)=>alert(error));
 },[]);
 
    return (
    <ItemDetail id={product.id} title={product.title} detail={product.detail} imgurl={product.imgurl}/>
  )
}
