import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( { product } ) => {
  return (
    <div className="producto">
        <img src={product.image} alt={product.name} />
        <div>
            <h4>{product.name}</h4>
            <p>Precio: ${product.price}</p>
            <Link className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" to={`/item/${product.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item
