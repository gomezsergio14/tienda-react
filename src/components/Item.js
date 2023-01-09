// import React from "react";

function Item() {
    const estilos={
        width:"18rem",
    }
  return (
            <div className="card" style={estilos}>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>  
                </div>
            </div>
        );
}

export default Item;
