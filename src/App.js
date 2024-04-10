import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from './pages/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <BrowserRouter> 
      <CartProvider>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="products" element={<ItemListContainer/>} />
          <Route path="products/:category" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />  
          <Route path='/cart' element={<Cart/>} />         
          <Route path='/checkout' element={<Checkout/>} />      
        </Routes>

      </CartProvider>      
    </BrowserRouter>
      
  );
}

export default App;
