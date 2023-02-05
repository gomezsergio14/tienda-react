import React, { useContext } from 'react'
import { CreateOrder } from '../services/firebase';
import { cartContext } from '../storage/cartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

function CartContainer() {
    const {cart, removeItem, getTotalPriceInCart, clear} = useContext(cartContext);
    const navigateTo = useNavigate();

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
            title: 'Desea finalizar la compra?',
            showDenyButton: true,
            icon: 'warning',
            confirmButtonText: 'Ok',
            denyButtonText: `Seguir comprando`,
            }).then((result) => {
                
                if (result.isConfirmed) {
                    MySwal.fire('Gracias por tu compra!', '', 'success');
                    navigateTo("/");
                    clear();
                } else if (result.isDenied) {
                    MySwal.fire('Continua con tu compra', '', 'info');
                    navigateTo("/cart");
                }
                })

        })
    }
    return (
        <div className="container-fluid">
        {
            cart.map(itemInCart=>(
                <div className="row mt-3 mx-auto">
                    {/* <h2>{itemInCart.id}</h2> */}
                    <h6 className="col">{itemInCart.title}</h6>
                    <h6 className="col">{itemInCart.detail}</h6>
                    <h6 className="col">{itemInCart.count}</h6>
                    <button onClick={()=>removeItem(itemInCart)} className="btn btn-danger col">X</button>
                </div>
            ))
        }
        <h4>El total de tu compra es: ${getTotalPriceInCart()}</h4>
        <button onClick={handleCheckout} className="btn btn-success">Finalizar compra</button>
        </div>
    )
}

export default CartContainer