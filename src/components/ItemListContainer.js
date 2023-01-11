import { useState , useEffect } from "react";
import Item from "./Item";
import ObtenerProductos, { ObtenerProductoPorCategoria } from "../services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer(props){
    const [productos,setProductos]=useState([]);
    let { nombreCategoria } = useParams();

    useEffect(()=>{
        if(!nombreCategoria) { 
        ObtenerProductos()
            .then((respuesta)=>{
            setProductos(respuesta);
        });}
        else {
            ObtenerProductoPorCategoria(nombreCategoria)
            .then((respuesta)=>{
                setProductos(respuesta);});
        }
    },[nombreCategoria]);
    
    const miColor={
        color: "#500ccf",
    };
    return(
    <>
        <h1 style={miColor}>{props.text}</h1>
        <div className="row d-flex justify-content-center">
        {
            productos.map((item)=>{return <Item item={item}/>})
        }
             {/* <Item item={Item}/>  */}
        
        </div>
    </>    
    )
}
export default ItemListContainer;