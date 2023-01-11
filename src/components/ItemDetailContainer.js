import React, { useEffect, useState } from 'react'
import { ObtenerProducto } from '../services/mockService';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [producto,setProducto] = useState([]);

    useEffect( () => {
        ObtenerProducto()
        .then( (respuesta)=>{
            setProducto(respuesta);
        });
    },[]);

  return (
    <ItemDetail id={producto.id} title={producto.title} detail={producto.detail} imgurl={producto.imgurl}/>
  )
}

export default ItemDetailContainer