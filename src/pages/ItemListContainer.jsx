import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/configFirebase";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const [name, setName] = useState();

    const category = useParams().category;

    useEffect(() => {

      const productsRef = collection(db, "products");
      const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

      getDocs(q)
        .then((resp) => {

          setProducts(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [category])
    
    
  return (
    <div>
        <ItemList products={products} name={name} />
    </div>
  )
}

export default ItemListContainer