import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({itemSelected}) => {
    const { item, addItem } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < itemSelected.stock && setCantidad(cantidad + 1)
    }
  return (
    
    <div className="container">
    <div className="producto-detalle">
        <img src={itemSelected.image} alt={itemSelected.name} />
        <div>
            <h3 className="titulo">{itemSelected.name}</h3>
            <p className="descripcion">{itemSelected.description}</p>
            <p className="categoria">Categoría: {itemSelected.category}</p>
            <p className="precio">${itemSelected.price}</p>
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAdd={() => { addItem(itemSelected, cantidad) }}
            />
        </div>
    </div>
</div>
   
    
  )
}

export default ItemDetail