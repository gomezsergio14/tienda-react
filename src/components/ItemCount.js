import React, { useState } from 'react'

function ItemCount(props) {
    const [count,setCount]=useState(1);
    
    function handleAdd(){
        setCount(count+1);
    }
    function handleSubstract(){
        setCount(count-1);
    }
    return (
    <div style={{display:"flex"}}>
        <button disabled={count===0} onClick={handleSubstract}>-</button>
        <p>{count}</p>
        <button disabled={count===props.stock} onClick={handleAdd}>+</button>
        <button className='btn btn-primary ms-1' onClick={()=>{props.onAddToCart(count)}}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount