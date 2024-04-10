import Item from "./Item";


const ItemList = ( {products, name} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{name}</h2>

        <div className="productos">
            { products.map((prod) => <Item product={prod} key={prod.id}/>) }
        </div>
    </div>
  )
}

export default ItemList