import React, { useContext } from 'react'
import { cartContext } from '../storage/cartContext'
import ItemCount from './ItemCount'

function ItemDetail({id,title,detail,imgurl}) {
    const estilosi={
        width:"18rem",
    }
    const {addToCart}= useContext(cartContext);

    function handleAddToCart(count){
      //const agregoCount=[...{id,title,detail,imgurl},count];//ESTO ESTA BIEN?
      console.log(`se agregaron ${count} items al carrito...`);
      addToCart(count);

    }
  return (
    <div className="card col-3 mx-2 my-3" style={estilosi}>
                <img src={imgurl} className="card-img-top" alt={id}></img>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {detail}
                </p>  
                <ItemCount stock={7} onAddToCart={handleAddToCart}/>
                <button>Ir al carrito</button>
                </div>
            </div>
  )
}

export default ItemDetail 