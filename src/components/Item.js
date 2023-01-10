// import React from "react";

function Item(props) {
    const {id,title,detail,imgurl}=props.item;
    const estilos={
        width:"18rem",
    }
  return (
            <div className="card col-3 mx-2 my-3" style={estilos}>
                <img src={imgurl} className="card-img-top" alt={id}></img>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {detail}
                </p>  
                </div>
            </div>
        );
}

export default Item;
