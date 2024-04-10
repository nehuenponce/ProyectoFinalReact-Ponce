import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { doc, getDoc} from "firebase/firestore";
import { db } from '../firebase/configFirebase';

const ItemDetailContainer = () => {
    const [itemSelected, setItemSelected] = useState(null);    
    const { id } = useParams("id");
    
    
    useEffect(() => {
      const docRef= doc(db, "products", id)
      getDoc(docRef)
        .then((resp) => {
          setItemSelected({...resp.data(), id: resp.id})
        })    
    }, [id]);
  return (
    <div>
        {itemSelected && <ItemDetail itemSelected={itemSelected} />}
    </div>
  )
}

export default ItemDetailContainer;