import React from 'react'
import { Link } from "react-router-dom"
import ItemCount from './ItemCount'

function ItemDetail({id,title,detail,price,stock,imgurl,onAddToCart,isInCart}) {
    const estilosi={
        width:"18rem",
    }
  return (
    <div className="card col-3 mx-2 my-3" style={estilosi}>
                <img src={imgurl} className="card-img-top" alt={id}></img>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {detail}
                </p>  
                <p className="card-text">
                    precio: ${price}
                </p>
                <p className="card-text">
                    Stock disponible: {stock}
                </p>
                { isInCart ?
                    <Link to="cart" className="btn btn-primary">Ir al carrito </Link>
                    :
                    (<ItemCount stock={7} onAddToCart={onAddToCart}/>)
                }
                {/* <ItemCount stock={7} onAddToCart={onAddToCart}/>
                <Link to="cart" className="btn btn-primary">Ir al carrito </Link> */}
                
                </div>
            </div>
  )
}

export default ItemDetail 