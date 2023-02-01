import React from 'react'

import ItemCount from './ItemCount'

function ItemDetail({id,title,detail,imgurl,onAddToCart}) {
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
                <ItemCount stock={7} onAddToCart={onAddToCart}/>
                <button>Ir al carrito</button>
                </div>
            </div>
  )
}

export default ItemDetail 