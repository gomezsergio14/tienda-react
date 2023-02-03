import React, { useContext } from 'react'
import { CreateOrder } from '../services/firebase';
import { cartContext } from '../storage/cartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

function CartContainer() {
    const {cart, removeItem, getTotalPriceInCart} = useContext(cartContext);

    function handleCheckout(){
        const items = cart.map(item => ({id: item.id,price: item.price,count:item.count,title:item.title}));
        const order = {
            buyer: {
                name: "Sergio",
                mail: "prueba@prueba.com",
                telefono: 12345,
            },
            items : items ,
            total: getTotalPriceInCart(),
            date: new Date(),
        };
        CreateOrder(order)
        .then((id)=>{
            const MySwal = withReactContent(Swal)

            MySwal.fire({
            title: 'Compra realizada!',
            icon: 'success',
            confirmButtonText: 'Ok',
            })

        })
    }
    return (
        <div>
        {
            cart.map(itemInCart=>(
                <div>
                    {/* <h2>{itemInCart.id}</h2> */}
                    <h6>{itemInCart.title}</h6>
                    <h6>{itemInCart.detail}</h6>
                    <h6>{itemInCart.count}</h6>
                    <button onClick={()=>removeItem(itemInCart)} className="btn btn-danger">X</button>
                </div>
            ))
        }
        <h4>El total de tu compra es: ${getTotalPriceInCart()}</h4>
        <button onClick={handleCheckout} className="btn btn-success">Finalizar compra</button>
        </div>
    )
}

export default CartContainer