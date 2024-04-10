import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handleVaciar = () => {
        clearCart();
    }
    

  return (
    <div className="container mx-auto mt-8">
        <br />
        <h1 className='text-3xl'>Tu Carrito: </h1>

        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3 className='text-3xl' >Producto: {prod.name}</h3>
                    <p className='text-xl'>Precio unit: ${prod.price}</p>
                    <p className='text-xl'>Precio total: ${prod.price * prod.cantidad}</p>
                    <p className='text-xl'> Cantidad: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            cart.length > 0 ?
            <>
                <h2 className='text-5xl' >Precio total: ${totalPrice()}</h2>
                <br />
                <button className="hover:brightness-110 hover:animate-pulse font-bold py-2 px-6 rounded-full bg-red-500 shadow-lg shadow-indigo-500/50 text-white"  onClick={handleVaciar} > Vaciar</button>
                <Link className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" to="/checkout">Finalizar compra</Link>
            </> :
            <>
            <br />
                <h2 className='text-xl'>El carrito está vacío</h2>
                <br />
                <Link className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" to="/">Volver al catalogo</Link>
            </>
            
        }
        
    </div>
  )
}

export default Cart