import { useState , useEffect } from "react";
import Item from "./Item";
import ObtenerProductos from "../services/mockService";

function ItemListContainer(props){
    const [productos,setProductos]=useState([])
    useEffect(()=>{
        ObtenerProductos().then((respuesta)=>{
            setProductos(respuesta);
        });
    },[]);
    
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