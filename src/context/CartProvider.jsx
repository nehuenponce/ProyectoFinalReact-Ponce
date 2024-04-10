import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";

const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({children}) => {   
    const [cart, setCart] = useState(carritoInicial);
    
    const addItem = (itemSelected, cantidad) => {

        const itemAgregado = { ...itemSelected, cantidad };

        const nuevoCarrito = [...cart];
        const estaEnElCarrito = nuevoCarrito.find((product) => product.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCart(nuevoCarrito);
    }

    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }

    const clearCart = () => {
        setCart([]);
    }
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    
    return (
    <CartContext.Provider value={{ 
        cart,
        addItem, 
        totalPrice, 
        clearCart,
        cantidadCarrito
        }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider