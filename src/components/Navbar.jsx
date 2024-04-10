import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="text-black text-4xl hover font-bold "><h1 className=''>iStock</h1></Link>
        <ul className="menu">
            <li><Link className="text-black text-xl font-bold" to="/">Inicio</Link></li>
            <li><Link className="text-black text-xl font-bold" to="/products/iphone">iPhone</Link></li>
            <li><Link className="text-black text-xl font-bold" to="/products/mac">Mac</Link></li>
            <li><Link className="text-black text-xl font-bold" to="/products/watch">Watch</Link></li>
            <li><Link className="text-black text-xl font-bold" to="/products/accessories">Otros</Link></li>
            <li><Link className="text-black text-xl font-bold" to="/products/used">Usados</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar