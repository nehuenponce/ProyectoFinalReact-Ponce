
const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAdd} ) => {

  return (
    <div>

        <div className="item-count">
            <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" onClick={handleSumar}>+</button>
        </div>
        <br/>
        <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" onClick={handleAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount