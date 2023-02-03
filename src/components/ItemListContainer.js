import { useState , useEffect } from "react";
import Item from "./Item";
import ObtenerProductos, { ObtenerProductoPorCategoria } from "../services/mockService";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function ItemListContainer(props){
    const [productos,setProductos]=useState([]);
    let { nombreCategoria } = useParams();
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        if(!nombreCategoria) { 
        ObtenerProductos()
            .then((respuesta)=>{
            setProductos(respuesta);
            setIsLoading(false);
        })
        .finally(()=>setIsLoading(false));}
        else {
            ObtenerProductoPorCategoria(nombreCategoria)
            .then((respuesta)=>{
                setProductos(respuesta);
                setIsLoading(false);})
            .finally(()=>setIsLoading(false));
        }
    },[nombreCategoria]);
    
    const miColor={
        color: "#500ccf",
    };
    return(
    <>
        <h1 style={miColor}>{props.text}</h1>
        {isLoading?
            (
            <Loader/>
            )
            :(
            <div className="row d-flex justify-content-center">
            {
                productos.map((item)=>{return <Item key={item.id} item={item}/>})
            }
             {/* <Item item={Item}/>  */}
        </div>
        )}
        
    </>    
    )
}
export default ItemListContainer;