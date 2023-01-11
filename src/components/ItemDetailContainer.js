import React, { useEffect, useState } from 'react'
import { ObtenerProducto } from '../services/mockService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [producto,setProducto] = useState([]);
    const parametro = useParams();

    useEffect( () => {
        ObtenerProducto(parametro.id)
        .then( (respuesta)=>{
            setProducto(respuesta);
        });
    },[parametro.id]);

    return (
    <ItemDetail id={producto.id} title={producto.title} detail={producto.detail} imgurl={producto.imgurl}/>
    )
}

export default ItemDetailContainer